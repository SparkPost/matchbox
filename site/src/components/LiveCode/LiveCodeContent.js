import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { DateUtils } from 'react-day-picker';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import github from 'prism-react-renderer/themes/github';
import { Box } from '@sparkpost/matchbox';
import * as components from '@sparkpost/matchbox';
import * as icons from '@sparkpost/matchbox-icons';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import EditorButton from '../EditorButton';

const StyledWrapper = styled(Box)`
  background: ${tokens.color_gray_100} !important;
  textarea:focus {
    outline: none;
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
  const { copy, copied } = components.useCopyToClipboard();

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
        code={formatted}
        scope={{ ...icons, ...components, ...scope, DateUtils }}
        theme={github}
      >
        <div id="live-code-content">
          <Box p="600" border={`6px solid ${tokens.color_gray_200}`} mb="500">
            <LivePreview />
          </Box>
        </div>
        <StyledWrapper position="relative" p="400" fontSize="100">
          <LiveEditor />
          <Box position="absolute" top="0" right="0">
            <EditorButton onClick={() => copy(code)}>
              {copied ? 'Copied' : 'Copy'}
            </EditorButton>
          </Box>
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
