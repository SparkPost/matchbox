import React from 'react';
import { render } from 'test-utils';
import ScreenReaderOnly from '../ScreenReaderOnly';

describe('ScreenReaderOnly', () => {
  it('renders with passed in children', () => {
    const wrapper = render(<ScreenReaderOnly>Children!</ScreenReaderOnly>).container;

    expect(wrapper).toHaveTextContent('Children!');
  });

  it('renders with necessary style rules', () => {
    const wrapper = render(<ScreenReaderOnly>Children!</ScreenReaderOnly>).container;

    expect(wrapper.firstChild).toHaveStyleRule('border', '0 !important');
    expect(wrapper.firstChild).toHaveStyleRule('clip', 'rect(1px,1px,1px,1px) !important');
    expect(wrapper.firstChild).toHaveStyleRule('clip-path', 'inset(50%) !important');
    expect(wrapper.firstChild).toHaveStyleRule('height', '1px !important');
    expect(wrapper.firstChild).toHaveStyleRule('margin', '-1px !important');
    expect(wrapper.firstChild).toHaveStyleRule('overflow', 'hidden !important');
    expect(wrapper.firstChild).toHaveStyleRule('padding', '0 !important');
    expect(wrapper.firstChild).toHaveStyleRule('position', 'absolute !important');
    expect(wrapper.firstChild).toHaveStyleRule('width', '1px !important');
    expect(wrapper.firstChild).toHaveStyleRule('word-wrap', 'normal !important');
  });

  it('renders as a "span" by default', () => {
    const wrapper = render(<ScreenReaderOnly>Children!</ScreenReaderOnly>).container;

    expect(wrapper.querySelector('span')).toBeInTheDocument();
  });

  it('renders as the passed in element to the "as" prop', () => {
    const wrapper = render(<ScreenReaderOnly as="div">Hello, world.</ScreenReaderOnly>).container;

    expect(wrapper.querySelector('span')).not.toBeInTheDocument();
    expect(wrapper.querySelector('div')).toBeInTheDocument();
  });

  it('renders with a passed in "id"', () => {
    const wrapper = render(<ScreenReaderOnly id="example-id">Hello, world.</ScreenReaderOnly>).container;

    expect(wrapper.querySelector('#example-id')).toBeInTheDocument();
  });
});
