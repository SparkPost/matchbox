import React from 'react';
import Banner from '../Banner';
import { tokens } from '@sparkpost/design-tokens';

import 'jest-styled-components';

describe('Banner', () => {
  const props = {
    title: 'Test Banner',
    onDismiss: jest.fn(),
    action: null,
    actions: null,
  };

  const subject = newProps =>
    global.mountStyled(
      <Banner {...props} {...newProps}>
        <p>You know this is a banner</p>
      </Banner>,
    );

  it('renders correctly with default props', () => {
    const wrapper = subject();
    expect(wrapper.find('[aria-label="Info"]')).toExist();
    expect(wrapper.find('h5').text()).toEqual('Test Banner');
    expect(wrapper.find('p').text()).toEqual('You know this is a banner');
    expect(wrapper.find('button').text()).toEqual('Dismiss');
    expect(wrapper).toHaveStyleRule('background', tokens.color_blue_100);
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

  it('dismisses banner correctly upon clicking dismiss icon', () => {
    let wrapper = subject();
    wrapper.find('button').simulate('click');
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });

  it('creats a clickable primary action', () => {
    const action = { content: 'Click me', onClick: jest.fn() };
    const wrapper = subject({ action });
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(action.onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').at(0)).toHaveStyleRule('background', tokens.color_gray_900);
  });

  it('renders multiple banner actions', () => {
    const actions = [
      { content: 'Click Me 1', onClick: jest.fn(), color: 'blue' },
      { content: 'Click Me 2', onClick: jest.fn(), outline: true },
    ];

    const wrapper = subject({ actions });
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(actions[0].onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').at(0)).toHaveStyleRule('background', tokens.color_blue_700);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(actions[1].onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').at(1)).toHaveStyleRule('background', 'transparent');
  });
});
