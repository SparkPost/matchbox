import React from 'react';
import Text from '../Text';

describe('Text', () => {
  it('it should render correctly', () => {
    const wrapper = global.renderStyled(<Text id="text-id">Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should truncate', () => {
    const wrapper = global.renderStyled(<Text truncate>Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render data-id', () => {
    const wrapper = global.mountStyled(<Text data-id="test-id">Text</Text>);
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });
});
