import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { onKey } from '../../helpers/keyEvents';
import Content from './Content';
import { base, isOpen, wrapper, closeButton } from './styles';

const StyledBase = styled(Box)`
  ${base}
  ${isOpen}
`;

const StyledWrapper = styled('div')`
  ${wrapper}
`;

const StyledCloseButton = styled(Button)`
  ${closeButton}
`;

function Modal(props) {
  const { onClose, children, className, showCloseButton, ...rest } = props;
  let container = useRef(null);
  let content = useRef(null);

  const handleKeydown = e => {
    const { open } = props;

    if (open && onClose) {
      onKey('escape', onClose)(e);
    }
  };

  const handleOutsideClick = e => {
    const { open } = props;
    const isOutside =
      content && !content.contains(e.target) && container && container.contains(e.target);

    if (open && isOutside && onClose) {
      onClose(e);
    }
  };

  return (
    <StyledBase
      className={className}
      onClose={onClose}
      {...rest}
      ref={el => (container = el)}
      role="dialog"
      aria-modal="true"
    >
      <StyledWrapper minHeight="100%" ref={el => (content = el)}>
        <Content open={props.open}>
          <WindowEvent event="keydown" handler={handleKeydown} />

          <WindowEvent event="click" handler={handleOutsideClick} />

          {showCloseButton && (
            <StyledCloseButton flat onClick={onClose} data-id="modal-close">
              <span>Close</span>

              <Close />
            </StyledCloseButton>
          )}

          {children}
        </Content>
      </StyledWrapper>
    </StyledBase>
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
};

Modal.displayName = 'Modal';
export default Modal;
