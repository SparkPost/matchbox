import React from 'react';
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

  const subject = newProps =>
    global.mountStyled(
      <Banner {...props} {...newProps}>
        <p>You know this is a banner</p>
        <Banner.Action onClick={props.onClick}>Banner Action</Banner.Action>
        <Banner.Media>
          <Picture seeThrough>
            <Picture.Image src="/test.jpg" />
          </Picture>
        </Banner.Media>
      </Banner>,
    );

  it('renders correctly with default props', () => {
    const wrapper = subject();
    expect(wrapper.find('[aria-label="Info"]')).toExist();
    expect(wrapper.find('h5').text()).toEqual('Test Banner');
    expect(wrapper.find('p').text()).toEqual('You know this is a banner');
    expect(
      wrapper
        .find('button')
        .at(1)
        .text(),
    ).toEqual('Dismiss');
    expect(wrapper).toHaveStyleRule('background', tokens.color_blue_100);
  });

  it('renders correctly with id and data-id props', () => {
    const wrapper = subject({ 'data-id': 'data-id', id: 'id' });
    expect(wrapper.find('[data-id="data-id"]')).toExist();
    expect(wrapper.find('#id')).toExist();
  });

  it('renders status icons and background colors', () => {
    let wrapper = subject({ status: 'success' });
    expect(wrapper.find('[aria-label="Success"]')).toExist();
    expect(wrapper).toHaveStyleRule('background', tokens.color_green_100);

    wrapper = subject({ status: 'danger' });
    expect(wrapper.find('[aria-label="Error"]')).toExist();
    expect(wrapper).toHaveStyleRule('background', tokens.color_red_100);

    wrapper = subject({ status: 'warning' });
    expect(wrapper.find('[aria-label="Warning"]')).toExist();
    expect(wrapper).toHaveStyleRule('background', tokens.color_yellow_100);

    wrapper = subject({ status: 'info' });
    expect(wrapper.find('[aria-label="Info"]')).toExist();
    expect(wrapper).toHaveStyleRule('background', tokens.color_blue_100);
  });

  it('renders media correctly', () => {
    let wrapper = subject();
    expect(wrapper.find('img').props().src).toEqual('/test.jpg');
  });

  it('dismisses banner correctly upon clicking dismiss icon', () => {
    let wrapper = subject();
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });

  it('creats a clickable primary action if deprecated action prop is passed', () => {
    const action = { content: 'Click me', onClick: jest.fn() };
    const wrapper = subject({ action });
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(action.onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').at(1)).toHaveStyleRule('background', 'gray');
  });

  it('renders multiple banner actions if deprecated actions prop is passed', () => {
    const actions = [
      { content: 'Click Me 1', onClick: jest.fn(), color: 'blue' },
      { content: 'Click Me 2', onClick: jest.fn(), outline: true },
    ];

    const wrapper = subject({ actions });
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(actions[0].onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').at(1)).toHaveStyleRule('background', 'blue');

    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(actions[1].onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').at(2)).toHaveStyleRule('background', 'transparent');
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
    global.mountStyled(<Test />);
    expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });

  it('renders Banner.Action', () => {
    const wrapper = subject();

    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find('button')
        .at(0)
        .text(),
    ).toEqual('Banner Action');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
