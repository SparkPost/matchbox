import React from 'react';
import { render, fireEvent } from 'test-utils';
import Banner from '../Banner';
import { Picture } from '../../Picture';
import { tokens } from '@sparkpost/design-tokens';

describe('Banner', () => {
  const props = {
    title: 'Test Banner',
    onDismiss: jest.fn(),
    action: null,
    actions: null,
    onClick: jest.fn(),
  };

  const subject = (newProps) =>
    render(
      <Banner {...props} {...newProps}>
        <p>You know this is a banner</p>
        <Banner.Action onClick={props.onClick}>Banner Action</Banner.Action>
        <Banner.Media>
          <Picture seeThrough>
            <Picture.Image src="/test.jpg" />
          </Picture>
        </Banner.Media>
      </Banner>,
    ).container;

  it('renders correctly with default props', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[aria-label="Info"]')).toBeInTheDocument();
    expect(wrapper.querySelector('h5').textContent).toEqual('Test Banner');
    expect(wrapper.querySelector('p').textContent).toEqual('You know this is a banner');
    expect(wrapper.querySelectorAll('button')[1].textContent).toEqual('Dismiss');
    expect(wrapper.firstChild).toHaveStyleRule('background', tokens.color_blue_100);
  });

  it('renders correctly with id and data-id props', () => {
    const wrapper = subject({ 'data-id': 'data-id', id: 'id' });
    expect(wrapper.querySelector('[data-id="data-id"]')).toBeInTheDocument();
    expect(wrapper.querySelector('#id')).toBeInTheDocument();
  });

  it('renders status icons and background colors', () => {
    let wrapper = subject({ status: 'success' });
    expect(wrapper.querySelector('[aria-label="Success"]')).toBeInTheDocument();
    expect(wrapper.firstChild).toHaveStyleRule('background', tokens.color_green_100);

    wrapper = subject({ status: 'danger' });
    expect(wrapper.querySelector('[aria-label="Error"]')).toBeInTheDocument();
    expect(wrapper.firstChild).toHaveStyleRule('background', tokens.color_red_100);

    wrapper = subject({ status: 'warning' });
    expect(wrapper.querySelector('[aria-label="Warning"]')).toBeInTheDocument();
    expect(wrapper.firstChild).toHaveStyleRule('background', tokens.color_yellow_100);

    wrapper = subject({ status: 'info' });
    expect(wrapper.querySelector('[aria-label="Info"]')).toBeInTheDocument();
    expect(wrapper.firstChild).toHaveStyleRule('background', tokens.color_blue_100);
  });

  // RTL
  it('renders promo status icon that is hidden from screen readers', () => {
    render(
      <Banner id="test-id" status="promo">
        <p>content</p>
      </Banner>,
    );
    expect(document.querySelector('svg[aria-hidden="true"]')).toBeTruthy();
  });

  it('renders media correctly', () => {
    let wrapper = subject();
    expect(wrapper.querySelector('img').getAttribute('src')).toEqual('/test.jpg');
  });

  it('dismisses banner correctly upon clicking dismiss icon', () => {
    let wrapper = subject();
    fireEvent.click(wrapper.querySelectorAll('button')[1]);
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });

  it('creats a clickable primary action if deprecated action prop is passed', () => {
    const action = { content: 'Click me', onClick: jest.fn() };
    const wrapper = subject({ action });
    fireEvent.click(wrapper.querySelectorAll('button')[1]);
    expect(action.onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.querySelectorAll('button')[1]).toHaveStyleRule('background', 'gray');
  });

  it('renders multiple banner actions if deprecated actions prop is passed', () => {
    const actions = [
      { content: 'Click Me 1', onClick: jest.fn(), color: 'blue' },
      { content: 'Click Me 2', onClick: jest.fn(), outline: true },
    ];

    const wrapper = subject({ actions });
    fireEvent.click(wrapper.querySelectorAll('button')[1]);
    expect(actions[0].onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.querySelectorAll('button')[1]).toHaveStyleRule('background', 'blue');

    fireEvent.click(wrapper.querySelectorAll('button')[2]);
    expect(actions[1].onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.querySelectorAll('button')[2]).toHaveStyleRule('background', 'transparent');
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <Banner ref={ref} title="test content"></Banner>
          not this
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });

  it('renders Banner.Action', () => {
    const wrapper = subject();

    fireEvent.click(wrapper.querySelectorAll('button')[0]);
    expect(wrapper.querySelectorAll('button')[0].textContent).toEqual('Banner Action');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
