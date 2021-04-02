import React from 'react';
import PropTypes from 'prop-types';
import { padding, layout } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import PopoverOverlay from './PopoverOverlay';
import PopoverContent from './PopoverContent';
import { onKey } from '../../helpers/keyEvents';
import useWindowEvent from '../../hooks/useWindowEvent';
import { deprecate } from '../../helpers/propTypes';
import { findFocusableChild } from '../../helpers/focus';

const Popover = React.forwardRef(function Popover(props, ref) {
  const { as, id, open: controlledOpen, onClose, children, trigger, wrapper, ...rest } = props;
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
  React.useLayoutEffect(() => {
    if (shouldBeOpen && popoverRef && popoverRef.current) {
      popoverRef.current.focus();
    }
  }, [shouldBeOpen]);

  // Toggles uncontrolled open state
  function handleUncontrolledToggle() {
    setOpen(!open);
  }

  // Focus on activator element when closing
  function focusOnActivator() {
    if (activatorRef && activatorRef.current) {
      const activatorToFocus = findFocusableChild(activatorRef.current) || activatorRef.current;
      activatorToFocus.focus();
    }
  }

  // Focuses on activator when controlled open state closes ONLY
  React.useLayoutEffect(() => {
    // explicit false check to rule out uncontrolled open state
    if (controlledOpen === false) {
      focusOnActivator();
    }
  }, [controlledOpen]);

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

      focusOnActivator();
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

    if (open) {
      onKey('escape', () => {
        handleUncontrolledToggle();
        focusOnActivator();
      })(e);
    }
  }

  // Toggles uncontrolled popovers
  function handleTrigger() {
    if (open !== null) {
      handleUncontrolledToggle();
      if (open === false) {
        focusOnActivator();
      }
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
  portalId: deprecate(PropTypes.string, 'Portals are no longer used in Popovers'),
  ...createPropTypes(padding.propNames),
  ...createPropTypes(layout.propNames),
};

export default Popover;
