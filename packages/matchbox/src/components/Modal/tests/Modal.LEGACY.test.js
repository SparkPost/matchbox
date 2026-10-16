import React from 'react';
import { render, fireEvent } from 'test-utils';
import Modal from '../Modal';

const subject = (props) =>
  render(
    <Modal.LEGACY {...props}>
      <div data-id="child-content">I am some child content</div>
    </Modal.LEGACY>,
  ).baseElement;

describe('Modal', () => {
  const modalPortal = global.document.createElement('div');
  modalPortal.setAttribute('id', 'modal-portal');
  const body = global.document.querySelector('body');
  body.appendChild(modalPortal);

  it('renders content as hidden when the "open" prop is false', () => {
    const wrapper = subject({ open: false });

    expect(wrapper.querySelector('[data-id="child-content"]')).not.toBeInTheDocument();
  });

  it('renders content visible when the "open" prop is true', () => {
    const wrapper = subject({ open: true });

    expect(wrapper.querySelector('[data-id="child-content"]')).toBeInTheDocument();
  });

  it('renders with relevant ARIA attributes', () => {
    const wrapper = subject({ open: true });

    expect(wrapper.querySelector('[role="dialog"]')).toBeInTheDocument();
    expect(wrapper.querySelector('[aria-modal="true"]')).toBeInTheDocument();
  });

  it('renders a close button when "showCloseButton" is true', () => {
    const wrapper = subject({ open: true, showCloseButton: true });

    expect(wrapper.querySelector('[data-id="modal-close"]')).toBeInTheDocument();
  });

  it('invokes "onClose" when clicking on the close button', () => {
    const mockOnClose = jest.fn();
    const wrapper = subject({ open: true, showCloseButton: true, onClose: mockOnClose });
    fireEvent.click(wrapper.querySelector('button[data-id="modal-close"]'));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
