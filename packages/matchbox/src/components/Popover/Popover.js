import React from 'react';
import PropTypes from 'prop-types';
import { padding, layout } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import PopoverOverlay from './PopoverOverlay';
import PopoverContent from './PopoverContent';
import { onKey, onKeys } from '../../helpers/keyEvents';
import useWindowEvent from '../../hooks/useWindowEvent';
import { deprecate } from '../../helpers/propTypes';
import { findFocusableChild } from '../../helpers/focus';

const Popover = React.forwardRef(function Popover(props, ref) {
  const {
    as,
    id,
    open: controlledOpen,
    onClose,
    children,
    trigger,
    wrapper,
    portalId,
    closeOnTab,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(null);
  const popoverRef = React.useRef();
  const activatorRef = React.useRef();

  const shouldBeOpen = controlledOpen || open;
  const Wrapper = as || wrapper || 'span';

  useWindowEvent('click', handleOutsideClick);
  useWindowEvent('keydown', handleEsc);

  // Mount hook – sets initial close state if uncontrolled
  React.useEffect(() => {
    // This component becomes "controlled" if the prop 'open' is given a boolean value
    if (controlledOpen === undefined) {
      setOpen(false);
    }
  }, []);

  // Automatically focuses on content when opening
  React.useEffect(() => {
    if (shouldBeOpen && popoverRef && popoverRef.current) {
      const contentToFocus = findFocusableChild(popoverRef.current) || popoverRef.current;

      // Honestly not sure why this doesn't work without a timeout
      setTimeout(() => {
        contentToFocus.focus();
      }, 10);
    }
  }, [shouldBeOpen]);

  // Handles `aria-haspopup` and `aria-expanded` attributes on the activator
  React.useEffect(() => {
    applyActivatorAttributes();
  }, [activatorRef, shouldBeOpen]);

  // Toggles uncontrolled open state
  function handleUncontrolledToggle() {
    setOpen(!open);
  }

  // Focus on activator element
  // This is only called for when closing via keyboard
  function focusOnActivator() {
    if (activatorRef && activatorRef.current) {
      const activatorToFocus = findFocusableChild(activatorRef.current) || activatorRef.current;
      activatorToFocus.focus();
    }
  }

  function applyActivatorAttributes() {
    if (activatorRef && activatorRef.current) {
      const activatorElem = findFocusableChild(activatorRef.current) || activatorRef.current;
      activatorElem.setAttribute('aria-haspopup', 'true');
      activatorElem.setAttribute('aria-expanded', shouldBeOpen);
    }
  }

  // Toggles uncontrolled popovers on clicking outside, and calls `onClose` for controlled popovers
  function handleOutsideClick(e) {
    const isOutside =
      popoverRef.current &&
      !popoverRef.current.contains(e.target) &&
      activatorRef.current &&
      !activatorRef.current.contains(e.target);

    if (isOutside && shouldBeOpen) {
      if (onClose) {
        onClose(e);
      }

      if (open) {
        handleUncontrolledToggle();
      }
    }
  }

  // Toggles uncontrolled popovers on escape keydown, and calls `onClose` for controlled popovers
  function handleEsc(e) {
    if (onClose && shouldBeOpen) {
      onKey('escape', () => {
        onClose(e);
        focusOnActivator();
      })(e);
    }

    if (onClose && shouldBeOpen && closeOnTab) {
      onKey('tab', () => {
        onClose(e);
        focusOnActivator();
      })(e);
    }

    // Uncontrolled
    if (open) {
      onKey('escape', () => {
        handleUncontrolledToggle();
        focusOnActivator();
      })(e);
    }

    // Uncontrolled
    if (closeOnTab && open) {
      onKey('tab', () => {
        handleUncontrolledToggle();
        focusOnActivator();
      })(e);
    }
  }

  // Toggles uncontrolled popovers
  function handleTrigger() {
    if (open !== null) {
      handleUncontrolledToggle();
    }
  }

  function handleActivatorKey(e) {
    if (open === false) {
      onKeys(['arrowUp', 'arrowDown'], () => {
        // Stop arrow keys from scrolling the page
        e.preventDefault();
        handleUncontrolledToggle();
      })(e);
    }
  }

  // Renders popover content
  function renderPopover() {
    function assignRefs(node) {
      if (ref) {
        ref.current = node;
      }
      popoverRef.current = node;
    }

    return (
      <PopoverContent open={shouldBeOpen} ref={assignRefs} {...rest}>
        {children}
      </PopoverContent>
    );
  }

  // Renders popover trigger
  function renderActivator({ activatorRef: forwardedRef }) {
    function assignRefs(node) {
      forwardedRef(node);
      activatorRef.current = node;
    }

    return (
      <Box
        as={Wrapper}
        // Inline block is required to measure and set height correctly
        display={Wrapper === 'span' ? 'inline-block' : null}
        position="relative"
        onClick={handleTrigger}
        onKeyDown={handleActivatorKey}
        ref={assignRefs}
      >
        {trigger}
      </Box>
    );
  }

  return (
    <PopoverOverlay
      as={Wrapper}
      id={id}
      open={shouldBeOpen}
      renderActivator={renderActivator}
      renderPopover={renderPopover}
      activatorRef={activatorRef}
      portalId={portalId}
    />
  );
});

Popover.displayName = 'Popover';
Popover.propTypes = {
  id: PropTypes.string,
  /**
   * A React component to will trigger the popover
   * Click event is handled for you if this component is uncontrolled.
   */
  trigger: PropTypes.node,
  /**
   * Adds a padding to the Popover
   */
  sectioned: deprecate(PropTypes.bool, 'Use padding system props instead'),
  /**
   * Opens the popover.
   * By default, open state is handled automatically. Passing this value in will turn this into a controlled component.
   */
  open: PropTypes.bool,
  left: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  /**
   * Callback function that is called when clicking outside the popover, or hitting escape.
   */
  onClose: PropTypes.func,
  /**
   * Popover Content
   */
  children: PropTypes.node,
  as: PropTypes.oneOf(['div', 'span']),
  wrapper: deprecate(PropTypes.oneOf(['div', 'span']), 'Use `as` prop instead'),
  portalId: PropTypes.string,
  closeOnTab: PropTypes.bool,
  ...createPropTypes(padding.propNames),
  ...createPropTypes(layout.propNames),
};

Popover.defaultProps = {
  closeOnTab: true,
};

export default Popover;
