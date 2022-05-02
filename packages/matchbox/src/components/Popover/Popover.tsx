import React from 'react';
import { PaddingProps, LayoutProps, ResponsiveValue } from 'styled-system';
import { PortalProps } from '../Portal';
import { Box } from '../Box';
import PopoverOverlay from './PopoverOverlay';
import PopoverContent from './PopoverContent';
import { onKey, onKeys } from '../../helpers/keyEvents';
import useWindowEvent from '../../hooks/useWindowEvent';
import { findFocusableChild } from '../../helpers/focus';
import type * as Polymorphic from '../../helpers/types';
import { combineRefs } from '../../helpers/ref';

export type PopoverProps = PaddingProps &
  LayoutProps & {
    id?: string;
    /**
     * A React component to will trigger the popover
     * Click event is handled for you if this component is uncontrolled.
     */
    trigger?: React.ReactNode;
    /**
     * Adds a padding to the Popover
     * @deprecated Use padding system props instead
     */
    sectioned?: boolean;
    /**
     * Opens the popover.
     * By default, open state is handled automatically. Passing this value in will turn this into a controlled component.
     */
    open?: boolean;
    /**
     * @deprecated Use `position` instead
     */
    left?: boolean;
    /**
     * @deprecated Use `position` instead
     */
    right?: boolean;
    /**
     * @deprecated Use `position` instead
     */
    top?: boolean;
    /**
     * @deprecated Use `position` instead
     */
    bottom?: boolean;
    position?: ResponsiveValue<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>;
    /**
     * Callback function that is called when clicking outside the popover, or hitting escape.
     */
    onClose?: (e: MouseEvent | KeyboardEvent) => void;

    /**
     * Popover Content
     */
    children?: React.ReactNode;
    as?: 'div' | 'span';
    /**
     * @deprecated Use `as` prop instead
     */
    wrapper?: 'div' | 'span';
    portalId?: PortalProps['containerId'];
    /**
     * Closes the popover when tabbing out of the popover. On by default.
     */
    closeOnTab?: boolean;
    /**
     * Closes the popover when clicking inside the popover. Off by default.
     */
    closeOnInsideClick?: boolean;
  };

type PolymorphicPopover = Polymorphic.ForwardRefComponent<'span', PopoverProps>;

const Popover = React.forwardRef<HTMLSpanElement, PopoverProps>(function Popover(props, ref) {
  const {
    as,
    id,
    open: controlledOpen,
    onClose,
    children,
    trigger,
    wrapper,
    portalId,
    closeOnTab = true,
    closeOnInsideClick = false,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(null);
  const popoverRef = React.useRef<HTMLDivElement>();
  const activatorRef = React.useRef<HTMLDivElement>();

  const shouldBeOpen = controlledOpen || open;
  const Wrapper = as || wrapper || 'span';

  useWindowEvent('click', handleClick);
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
    if (activatorRef && activatorRef.current) {
      const activatorElem = findFocusableChild(activatorRef.current) || activatorRef.current;
      activatorElem.setAttribute('aria-haspopup', 'true');
      activatorElem.setAttribute('aria-expanded', Boolean(shouldBeOpen).toString());
    }
  }, [trigger, activatorRef, open, controlledOpen]);

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

  // Toggles uncontrolled popovers on clicking outside, and calls `onClose` for controlled popovers
  function handleClick(e: MouseEvent) {
    const isInside = popoverRef.current && popoverRef.current.contains(e.target as Node);
    const isOutside =
      popoverRef.current &&
      !popoverRef.current.contains(e.target as Node) &&
      activatorRef.current &&
      !activatorRef.current.contains(e.target as Node);

    if ((isOutside && shouldBeOpen) || (isInside && closeOnInsideClick && shouldBeOpen)) {
      if (onClose) {
        onClose(e);
      }

      if (open) {
        handleUncontrolledToggle();
      }
    }
  }

  // Toggles uncontrolled popovers on escape keydown, and calls `onClose` for controlled popovers
  function handleEsc(e: KeyboardEvent) {
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

  function handleActivatorKey(e: React.KeyboardEvent) {
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
    return (
      <PopoverContent open={shouldBeOpen} ref={combineRefs(ref, popoverRef)} {...rest}>
        {children}
      </PopoverContent>
    );
  }

  // Renders popover trigger
  function renderActivator({ activatorRef: forwardedRef }) {
    return (
      <Box
        as={Wrapper}
        // Inline block is required to measure and set height correctly
        display={Wrapper === 'span' ? 'inline-block' : null}
        position="relative"
        onClick={handleTrigger}
        onKeyDown={handleActivatorKey}
        ref={combineRefs(forwardedRef, activatorRef)}
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
      portalId={portalId}
    />
  );
}) as PolymorphicPopover & {
  PopoverContent: typeof PopoverContent;
  PopoverOverlay: typeof PopoverOverlay;
};

Popover.displayName = 'Popover';

export default Popover;
