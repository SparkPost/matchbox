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

function Popover(props) {
  const { as, open: controlledOpen, onClose, children, trigger, wrapper, ...rest } = props;
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

  // Toggles uncontrolled open state
  function handleUncontrolledToggle() {
    setOpen(!open);
  }

  // Toggles uncontrolled popovers, and calls `onClose` for controlled popovers
  function handleOutsideClick(e) {
    const isOutside =
      !popoverRef.current.contains(e.target) && !activatorRef.current.contains(e.target);

    if (isOutside && shouldBeOpen) {
      if (onClose) {
        onClose(e);
      }

      if (open) {
        handleUncontrolledToggle();
      }
    }
  }

  // Toggles uncontrolled popovers, and calls `onClose` for controlled popovers
  function handleEsc(e) {
    if (onClose && shouldBeOpen) {
      onKey('escape', onClose)(e);
    }

    if (open) {
      onKey('escape', handleUncontrolledToggle)(e);
    }
  }

  // Toggles uncontrolled popovers
  function handleTrigger() {
    if (open !== null) {
      handleUncontrolledToggle();
    }
  }

  // Renders popover content
  function renderPopover() {
    return (
      <PopoverContent open={shouldBeOpen} popoverRef={popoverRef} {...rest}>
        {children}
      </PopoverContent>
    );
  }

  // Renders popover trigger
  function renderActivator({ activatorRef: forwardedRef }) {
    return (
      <Box
        as={Wrapper}
        display={Wrapper === 'span' ? 'inline-block' : null}
        position="relative"
        onClick={handleTrigger}
        ref={activatorRef}
      >
        <Box
          as={Wrapper}
          display={Wrapper === 'span' ? 'inline-block' : null}
          width="100%"
          height="100%"
          ref={forwardedRef}
        >
          {trigger}
        </Box>
      </Box>
    );
  }

  return (
    <PopoverOverlay
      as={Wrapper}
      open={shouldBeOpen}
      renderActivator={renderActivator}
      renderPopover={renderPopover}
      activatorRef={activatorRef}
    />
  );
}

Popover.displayName = 'Popover';
Popover.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
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
  left: PropTypes.bool,
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
  wrapper: PropTypes.oneOf(['div', 'span']),
  ...createPropTypes(padding.propNames),
  ...createPropTypes(layout.propNames),
};

export default Popover;
