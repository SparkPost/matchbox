import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import ResizeContainer from '../ResizeContainer/ResizeContainer';
import { Box } from '@sparkpost/matchbox';
import * as components from '@sparkpost/matchbox';

import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

const StyledEditor = styled(LiveEditor)`
  background: ${tokens.color_blue_1000};
  font-size: ${tokens.fontSize_100};
  color: ${tokens.color_blue_200}; // controls the blinking cursor color
`;

function Content(props) {
  const { description, disableResize, code } = props;

  const formatted = prettier.format(code.trim(), {
    parser: 'babel',
    plugins: [parserBabel],
    tabWidth: 2,
    jsxSingleQuote: false
  });

  return (
    <Box mt="600" mb="600">
      <Box as="p" mb="500" pb="0">
        {description}
      </Box>
      <LiveProvider code={formatted.trim()} scope={components}>
        <ResizeContainer disableResize={disableResize}>
          <LivePreview />
        </ResizeContainer>
        <Box bg="blue.1000" p="400" fontSize="100">
          <StyledEditor />
          <LiveError />
        </Box>
      </LiveProvider>
    </Box>
  );
}

Content.displayName = 'LiveCode.Content';

Content.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  description: PropTypes.string
};

export default Content;
