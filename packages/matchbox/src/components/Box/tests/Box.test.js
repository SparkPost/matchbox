import React from 'react';
import Box from '../Box';
import 'jest-styled-components';

describe('Box', () => {
  it('it should render correctly', () => {
    const wrapper = global.renderStyled(<Box>Just a Box</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should truncate', () => {
    const wrapper = global.renderStyled(<Box truncate>Just a truncated Box</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it pass through valid html attributes', () => {
    const wrapper = global.renderStyled(<Box aria-label="test-box" id="test-id">Box with html attributes</Box>);
    expect(wrapper).toHaveAttributeValue('aria-label', 'test-box');
    expect(wrapper).toHaveAttributeValue('id', 'test-id');
  });
});
