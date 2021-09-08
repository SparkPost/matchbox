import React from 'react';
import FocusLock from 'react-focus-lock';
import { Transition } from 'react-transition-group';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { Portal } from '../Portal';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useWindowEvent } from '../../hooks';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { getRectFor } from '../../helpers/geometry';
import { getWindow, isInIframe } from '../../helpers/window';
import { DrawerContext } from './context';
import { Overlay, Container } from './styles';

export type DrawerProps = {
  children?: React.ReactNode;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
  id: string;
  onChange?: (open?: boolean) => void;
  onClose?: () => void;
  open: boolean;
  portalId?: string;
  position?: 'right' | 'left';
};

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function Drawer(props, userRef) {
  const {
    children,
    closeOnEscape = true,
    closeOnOutsideClick = true,
    id,
    onChange,
    onClose,
    open,
    portalId,
    position = 'right',
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>();
  const childrenRef = React.useRef<HTMLDivElement>();
  const footerRef = React.useRef<HTMLDivElement>();
  const [footerHeight, setFooterHeight] = React.useState('0px');

  // Calls onClose when clicking outside drawer content
  function handleOutsideClick(e) {
    if (!closeOnOutsideClick) {
      return;
    }

    const isOutside =
      overlayRef.current &&
      overlayRef.current.contains(e.target) &&
      childrenRef &&
      childrenRef.current &&
      !childrenRef.current.contains(e.target);

    if (isOutside && open && onClose) {
      onClose();
    }
  }

  // Calls onClose when receiving a escape keydown event
  function handleEscape(e) {
    if (closeOnEscape && open && onClose) {
      onKey('escape', onClose)(e);
    }
  }

  useWindowEvent('keydown', handleEscape);
  useWindowEvent('click', handleOutsideClick);

  React.useEffect(() => {
    if (onChange) {
      onChange(open);
    }
  }, [open]);

  /**
   * Drawer.Footer is a fixed element. This effect measures height of the footer and uses
   * it as padding to offset Drawer.Content so its children isn't rendered underneath
   * the footer
   */
  React.useLayoutEffect(() => {
    if (!footerRef.current) {
      setFooterHeight('0px');
    } else {
      setFooterHeight(`${getRectFor(footerRef.current).height}px`);
    }
  }, [footerRef.current, open]);

  /**
   * On drawer open, moves focus to the container
   * Without this, focus gets moved to the close button first
   */
  React.useLayoutEffect(() => {
    let timer;
    if (open) {
      timer = getWindow().setTimeout(() => {
        childrenRef.current.focus();
      }, secondsToMS(tokens.motionDuration_medium));
    }
    return () => {
      getWindow().clearTimeout(timer);
    };
  }, [open]);

  return (
    <>
      <ScrollLock isActive={open} />
      <Portal containerId={portalId}>
        <Transition
          mountOnEnter
          unmountOnExit
          in={open}
          timeout={{
            enter: 0,
            exit: secondsToMS(tokens.motionDuration_medium),
          }}
          nodeRef={overlayRef}
        >
          {(state) => (
            <FocusLock returnFocus disabled={!open || isInIframe()} autoFocus={false}>
              <Box
                data-id="drawer-wrapper"
                height="100vh"
                left="0"
                position="fixed"
                ref={userRef}
                style={{ pointerEvents: 'none' }}
                tabIndex={-1}
                top="0"
                width="100vw"
                zIndex="overlay"
              >
                <Overlay
                  data-id="drawer-overlay"
                  ref={overlayRef}
                  $state={state}
                  position="absolute"
                  top="0"
                  left="0"
                  height="100%"
                  width="100%"
                  bg="gray.900"
                />
                <Container
                  aria-modal="true"
                  data-id="drawer-container"
                  id={id}
                  ref={childrenRef}
                  role="dialog"
                  $state={state}
                  $viewportPosition={position}
                  tabIndex={-1}
                  bg="white"
                  position="absolute"
                  top="0"
                  bottom="0"
                  maxWidth="32rem" // TODO Make this configurable and reference sizing theme
                  width="80vw"
                  right={position === 'right' ? '0' : 'auto'}
                  left={position === 'left' ? '0' : 'auto'}
                >
                  <TouchScrollable>
                    <Box
                      overflowY="scroll"
                      position="relative"
                      height={`calc(100% - ${footerHeight})`}
                    >
                      <DrawerContext.Provider value={{ onClose, footerRef }}>
                        {children}
                      </DrawerContext.Provider>
                    </Box>
                  </TouchScrollable>
                </Container>
              </Box>
            </FocusLock>
          )}
        </Transition>
      </Portal>
    </>
  );
}) as React.ForwardRefExoticComponent<DrawerProps> & {
  Footer: typeof Footer;
  Content: typeof Content;
  Header: typeof Header;
};

Drawer.displayName = 'Drawer';
Drawer.Footer = Footer;
Drawer.Content = Content;
Drawer.Header = Header;

export default Drawer;
