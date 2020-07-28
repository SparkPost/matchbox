import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import palenight from 'prism-react-renderer/themes/palenight';
import { Box } from '@sparkpost/matchbox';
import * as components from '@sparkpost/matchbox';
import * as icons from '@sparkpost/matchbox-icons';

import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

const StyledEditor = styled(LiveEditor)`
  font-size: ${tokens.fontSize_100};
  ${'' /* // controls the blinking cursor color */}
  color: ${tokens.color_blue_200};
  textarea:focus { 
    outline: none;
    box-shadow: 0 0 2px ${tokens.color_white}, 0 0 0 2px ${
  tokens.color_blue_800
};
  }
`;

const StyledWrapper = styled(Box)`
  &,
  * {
    background: ${tokens.color_blue_1000} !important;
  }
`;

const StyledError = styled(LiveError)`
  background: ${tokens.color_red_800};
  font-size: ${tokens.fontSize_100};
  color: ${tokens.color_red_100};
  padding: ${tokens.spacing_400};
`;

function Content(props) {
  const { description, code, scope } = props;

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
      <LiveProvider
        code={formatted.trim()}
        scope={{ ...icons, ...components, ...scope }}
        theme={palenight}
      >
        <div id="live-code-content">
          <Box p="600" border={`6px solid ${tokens.color_gray_200}`} mb="500">
            <LivePreview />
          </Box>
        </div>
        <StyledWrapper p="400" fontSize="100">
          <StyledEditor />
        </StyledWrapper>
        <StyledError />
      </LiveProvider>
    </Box>
  );
}

Content.displayName = 'LiveCode.Content';

Content.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  scope: PropTypes.node,
  description: PropTypes.string
};

export default Content;
