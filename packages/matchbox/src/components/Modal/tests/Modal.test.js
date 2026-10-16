import React from 'react';
import { render, fireEvent } from 'test-utils';
import Modal from '../Modal';
import { Button } from '../../Button';
import { onKey } from '../../../helpers/keyEvents';

const subject = (props = {}, contentProps = {}) =>
  render(
    <Modal {...props}>
      <Modal.Header showCloseButton={props.showCloseButton}>Modal Header</Modal.Header>
      <Modal.Content {...contentProps}>Modal Content</Modal.Content>
      <Modal.Footer>
        <Button>Primary Button</Button>
        <Button>Secondary Button</Button>
        <Button>Tertiary Button</Button>
      </Modal.Footer>
    </Modal>,
  ).baseElement;

describe('Modal', () => {
  const modalPortal = global.document.createElement('div');
  modalPortal.setAttribute('id', 'modal-portal');
  const body = global.document.querySelector('body');
  body.appendChild(modalPortal);

  it('renders content as hidden when the "open" prop is false', () => {
    const wrapper = subject({ open: false });

    expect(wrapper.querySelector('[data-id="modal-content-wrapper"]')).not.toBeInTheDocument();
  });

  it('renders content visible when the "open" prop is true', () => {
    const wrapper = subject({ open: true });

    expect(wrapper.querySelector('[data-id="modal-content-wrapper"]')).toBeInTheDocument();
  });

  it('renders restricted modal height by default', () => {
    const wrapper = subject({ open: true });

    expect(wrapper.querySelectorAll('[data-id="modal-content"]')[0]).toHaveStyleRule(
      'max-height',
      '60vh',
    );
  });

  it('renders unrestricted modal height when "restrictHeight" is set to false', () => {
    const wrapper = subject({ open: true }, { restrictHeight: false });

    expect(wrapper.querySelectorAll('[data-id="modal-content"]')[0]).not.toHaveStyleRule(
      'max-height',
    );
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

  it('invokes "onClose" when pressing the escape key', () => {
    const mockOnClose = jest.fn();
    subject({ open: true, closeOnEscape: true, onClose: mockOnClose });
    onKey('escape', mockOnClose)({ key: 'Escape', shiftKey: false });

    expect(mockOnClose).toHaveBeenCalled();
  });
});
