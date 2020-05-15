import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { padding, maxWidth } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { Close } from '@sparkpost/matchbox-icons';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { Portal } from '../Portal';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { base, focusLock, wrapper, content, contentAnimation, closeButton } from './styles';

const StyledBase = styled('div')`
  ${base}
  ${padding}
`;

const StyledWrapper = styled('div')`
  ${wrapper}
`;

const StyledCloseButton = styled(Button)`
  ${closeButton}
`;

const StyledFocusLock = styled(FocusLock)`
  ${focusLock}
  ${maxWidth}
`;

const StyledContent = styled('div')`
  ${content}
  ${contentAnimation}
`;

function Modal(props) {
  const {
    onClose,
    children,
    portalId,
    className,
    showCloseButton,
    maxWidth,
    open,
    ...rest
  } = props;
  let container = useRef(null);
  let content = useRef(null);

  const handleKeydown = e => {
    if (open && onClose) {
      onKey('escape', onClose)(e);
    }
  };

  const handleOutsideClick = e => {
    const isOutside =
      content && !content.contains(e.target) && container && container.contains(e.target);

    if (open && isOutside && onClose) {
      onClose(e);
    }
  };

  return (
    <Portal containerId={portalId}>
      <StyledBase
        p={['400', null, '700']}
        {...rest}
        className={className}
        onClose={onClose}
        ref={el => (container = el)}
        role="dialog"
        aria-modal="true"
      >
        <StyledWrapper>
          <ModalContent open={open} maxWidth={maxWidth}>
            <div ref={el => (content = el)}>
              <WindowEvent event="keydown" handler={handleKeydown} />

              <WindowEvent event="click" handler={handleOutsideClick} />

              {showCloseButton && (
                <StyledCloseButton flat onClick={onClose} data-id="modal-close">
                  <ScreenReaderOnly>Close</ScreenReaderOnly>

                  <Close size={34} />
                </StyledCloseButton>
              )}

              {children}
            </div>
          </ModalContent>
        </StyledWrapper>
      </StyledBase>
    </Portal>
  );
}

function ModalContent(props) {
  const { open, children, maxWidth } = props;
  const content = useRef(null);

  return (
    <StyledFocusLock disabled={!open} maxWidth={maxWidth}>
      <Transition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={{
          enter: secondsToMS(tokens.motionDuration_medium),
          exit: secondsToMS(tokens.motionDuration_fast),
        }}
      >
        {/* Negative `tabIndex` required to programmatically focus */}
        {state => (
          <StyledContent state={state} tabIndex="-1" ref={content} data-id="modal-content-wrapper">
            {children}
          </StyledContent>
        )}
      </Transition>
    </StyledFocusLock>
  );
}

Modal.propTypes = {
  /**
   * Controlled open state of the modal
   */
  open: PropTypes.bool,
  /**
   * An optional function that is called on key down 'Escape' and on click outside modal content
   */
  onClose: PropTypes.func,
  /**
   * Modal content
   */
  children: PropTypes.node,
  showCloseButton: PropTypes.bool,
  maxWidth: PropTypes.string,
  /**
   * Controls the target container ID for the rendering React portal
   */
  portalId: PropTypes.string,
  ...createPropTypes(padding.propNames),
  ...createPropTypes(maxWidth.propNames),
};

Modal.defaultProps = {
  maxWidth: '1200',
};

export default Modal;
