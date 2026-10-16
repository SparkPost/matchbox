import React from 'react';
import { render, fireEvent, waitFor } from 'test-utils';
import Popover from '../Popover';
import * as geometryHelpers from '../../../helpers/geometry';

describe('Popover', () => {
  const subject = (props) =>
    render(<Popover trigger={<button>trigger</button>} {...props} />).baseElement;
  // Popover portals its overlay into the end of document.body
  const overlay = () => document.body.lastElementChild;

  describe('overlay and display', () => {
    it('should render its wrapper as a span', () => {
      const wrapper = subject();
      expect(wrapper.querySelectorAll('span')[0]).toHaveStyleRule('display', 'inline-block');
      expect(wrapper.querySelectorAll('span')[1]).toHaveStyleRule('display', 'inline-block');
    });

    it('should render its wrapper as a div', () => {
      const wrapper = subject({ as: 'div' });
      expect(wrapper.firstChild.firstChild.tagName).toBe('DIV');
      expect(wrapper.firstChild.firstChild).not.toHaveStyleRule('display');
      expect(overlay()).not.toHaveStyleRule('display');
    });

    it('should position correctly', () => {
      const wrapper = subject();
      expect(overlay()).toHaveStyleRule('width', '0px');
      expect(overlay()).toHaveStyleRule('height', '0px');
    });

    it('should handle measurement on open', () => {
      geometryHelpers.getPositionFor = jest.fn(() => ({}));
      const wrapper = subject();
      fireEvent.click(wrapper.querySelector('button'));
      expect(geometryHelpers.getPositionFor).toHaveBeenCalledTimes(3);
    });
  });

  describe('popover toggling', () => {
    it('should handle uncontrolled toggle on trigger click', () => {
      const wrapper = subject();
      expect(overlay()).toHaveAttributeValue('aria-hidden', 'true');
      expect(wrapper.querySelector('[data-id="popover-content"]')).not.toBeInTheDocument();
      fireEvent.click(wrapper.querySelector('button'));
      expect(wrapper.querySelector('[data-id="popover-content"]')).toBeInTheDocument();
      expect(overlay()).not.toHaveAttributeValue('aria-hidden');
      fireEvent.click(wrapper.querySelector('button'));
      expect(wrapper.querySelector('[data-id="popover-content"]')).not.toBeInTheDocument();
      expect(overlay()).toHaveAttributeValue('aria-hidden', 'true');
    });

    it('should not open a controlled popover', () => {
      const wrapper = subject({ open: false });
      fireEvent.click(wrapper.querySelector('button'));
      expect(wrapper.querySelector('[data-id="popover-content"]')).not.toBeInTheDocument();
    });

    it('should render an opened controlled popover', () => {
      const wrapper = subject({ open: true });
      expect(overlay()).not.toHaveAttributeValue('aria-hidden');
      expect(wrapper.querySelector('[data-id="popover-content"]')).toBeInTheDocument();
    });
  });

  describe('content', () => {
    it('should render deprecated sectioned prop', () => {
      const wrapper = subject({ sectioned: true, open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'padding',
        '1rem',
      );
    });

    it('should render custom padding', () => {
      const wrapper = subject({ p: '500', open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'padding',
        '1.5rem',
      );
    });

    it('should render custom width', () => {
      const wrapper = subject({ width: '100px', minWidth: '50px', open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'width',
        '100px',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'min-width',
        '50px',
      );
    });

    it('should render default position', () => {
      const wrapper = subject({ open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'top',
        '100%',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'bottom',
        'auto',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'left',
        '0',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'right',
        'auto',
      );
    });

    it('should render bottom left position', () => {
      const wrapper = subject({ left: true, open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'top',
        '100%',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'bottom',
        'auto',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'left',
        'auto',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'right',
        '0',
      );
    });

    it('should render top right position', () => {
      const wrapper = subject({ top: true, open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'bottom',
        '100%',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'top',
        'auto',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'left',
        '0',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'right',
        'auto',
      );
    });

    it('should render top left position', () => {
      const wrapper = subject({ top: true, left: true, open: true });
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'bottom',
        '100%',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'top',
        'auto',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'left',
        'auto',
      );
      expect(wrapper.querySelectorAll('[data-id="popover-content"]')[0]).toHaveStyleRule(
        'right',
        '0',
      );
    });

    it('should render a classname', () => {
      const wrapper = subject({ className: 'test-class', open: true });
      expect(wrapper.querySelector('.test-class')).toBeInTheDocument();
    });

    it('should render content', () => {
      const wrapper = subject({ children: 'test content', open: true });
      expect(
        wrapper.querySelectorAll('[data-id="popover-content"]')[0].textContent, // React transition group duplicates content
      ).toEqual('test content');
    });
  });

  it('renders with with a ref and focuses automatically', async () => {
    function Test() {
      const ref = React.useRef();
      return (
        <>
          <Popover ref={ref} open>
            test content
          </Popover>
          not this
        </>
      );
    }
    render(<Test />);
    await waitFor(() => expect(document.activeElement).not.toBe(document.body));
    expect(document.activeElement).toHaveTextContent('test content');
    expect(document.activeElement).not.toHaveTextContent('not this');
  });
});
