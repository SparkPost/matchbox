import React from 'react';
import 'jest-styled-components';
import Modal from '../Modal';

const subject = props =>
  global.mountStyled(
    <Modal {...props}>
      <div data-id="child-content">I am some child content</div>
    </Modal>,
  );

describe('Modal', () => {
  const modalPortal = global.document.createElement('div');
  modalPortal.setAttribute('id', 'modal-portal');
  const body = global.document.querySelector('body');
  body.appendChild(modalPortal);

  it('renders content as hidden when the "open" prop is false', () => {
    const wrapper = subject({ open: false });

    expect(wrapper.find('[data-id="child-content"]')).not.toExist();
  });

  it('renders content visible when the "open" prop is true', () => {
    const wrapper = subject({ open: true });

    expect(wrapper.find('[data-id="child-content"]')).toExist();
  });

  it('renders with relevant ARIA attributes', () => {
    const wrapper = subject({ open: true });

    expect(wrapper.find('[role="dialog"]')).toExist();
    expect(wrapper.find('[aria-modal="true"]')).toExist();
  });

  it('renders a close button when "showCloseButton" is true', () => {
    const wrapper = subject({ open: true, showCloseButton: true });

    expect(wrapper.find('[data-id="modal-close"]')).toExist();
  });

  it('invokes "onClose" when clicking on the close button', () => {
    const mockOnClose = jest.fn();
    const wrapper = subject({ open: true, showCloseButton: true, onClose: mockOnClose });
    wrapper.find('button[data-id="modal-close"]').simulate('click');

    expect(mockOnClose).toHaveBeenCalled();
  });
});
