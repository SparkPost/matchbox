import React from 'react';
import { render } from 'test-utils';
import Box from '../Box';

describe('Box', () => {
  it('it should render correctly', () => {
    const { container } = render(<Box>Just a Box</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('it should truncate', () => {
    const { container } = render(<Box truncate>Just a truncated Box</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('it pass through valid html attributes', () => {
    const { container } = render(
      <Box aria-label="test-box" id="test-id">
        Box with html attributes
      </Box>,
    );
    expect(container.firstChild).toHaveAttribute('aria-label', 'test-box');
    expect(container.firstChild).toHaveAttribute('id', 'test-id');
  });
});
