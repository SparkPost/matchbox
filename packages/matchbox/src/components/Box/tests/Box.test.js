import React from 'react';
import Box from '../Box';
import 'jest-styled-components';

describe('Box', () => {
  it('it should render correctly', () => {
    const wrapper = global.renderStyled(
      <Box
        py="400"
        color="gray.100"
        bg={['blue.200', 'blue.500', 'blue.800']}
        borderRadius="pill"
        border="400"
        fontSize="200"
        lineHeight="200"
        fontFamily="monospace"
      >
        Just a Box
      </Box>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('it should truncate', () => {
    const wrapper = global.renderStyled(<Box truncate>Just a truncated Box</Box>);
    expect(wrapper).toMatchSnapshot();
  });
});
