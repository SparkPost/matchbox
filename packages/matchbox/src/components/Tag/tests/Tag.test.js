import React from 'react';
import 'jest-styled-components';

import Tag from '../Tag';

// Feels unecessary to test color variations here /shrug

describe('Tag', () => {
  it('should render a default tag', () => {
    const wrapper = global.mountStyled(<Tag>Hola!</Tag>);
    expect(wrapper).toHaveStyleRule('background', '#d9e0e6');
    expect(wrapper).toHaveStyleRule('color', '#39444d');
    expect(wrapper.find('button')).not.toExist();
  });

  it('should render a remove button', () => {
    const wrapper = global.mountStyled(<Tag onRemove={jest.fn()}>Hola!</Tag>);
    expect(wrapper.find('button').text()).toEqual('Close');
  });

  it('should handle remove on click', () => {
    const remove = jest.fn();
    const wrapper = global.mountStyled(<Tag onRemove={remove}>Hola!</Tag>);
    wrapper.find('button').simulate('click');
    expect(remove).toHaveBeenCalled();
  });
});
