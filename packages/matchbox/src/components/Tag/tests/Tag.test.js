import React from 'react';
import Tag from '../Tag';

// Feels unecessary to test color variations here /shrug

describe('Tag', () => {
  it('should render a default tag', () => {
    const wrapper = global.mountStyled(<Tag>Hola!</Tag>);
    expect(wrapper).toHaveStyleRule('background', '#F5F8FA');
    expect(wrapper).toHaveStyleRule('color', '#39444D');
    expect(wrapper.find('button')).not.toExist();
  });

  it('should render with data-id and id', () => {
    const wrapper = global.mountStyled(
      <Tag id="id" data-id="data-id">
        Hola!
      </Tag>,
    );
    expect(wrapper.find('[data-id="data-id"]')).toExist();
    expect(wrapper.find('#id')).toExist();
  });

  it('should render a remove button', () => {
    const wrapper = global.mountStyled(<Tag onRemove={jest.fn()}>Hola!</Tag>);
    expect(wrapper.find('button').text()).toEqual('Remove');
  });

  it('should handle remove on click', () => {
    const remove = jest.fn();
    const wrapper = global.mountStyled(<Tag onRemove={remove}>Hola!</Tag>);
    wrapper.find('button').simulate('click');
    expect(remove).toHaveBeenCalled();
  });
});
