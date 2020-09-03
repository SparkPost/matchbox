import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import { Box, useCopyToClipboard } from '@sparkpost/matchbox';
import EditorButton from './EditorButton';

// See https://github.com/FormidableLabs/prism-react-renderer
function Pre(props) {
  let language = '';
  const { children = '', className = '' } = props.children.props;
  const { copy, copied } = useCopyToClipboard();

  if (!children) {
    return null;
  }

  if (children) {
    language = className.replace('language-', '');
  }

  return (
    <Box position="relative" mb="400" borderRadius="200">
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={github}
      >
        {({ tokens, getLineProps, getTokenProps }) => {
          const lines = tokens.slice(0, tokens.length - 1);
          return (
            <Box
              as="pre"
              overflow="scroll"
              bg="gray.100"
              p="600"
              mb="0"
              lineHeight="300"
              borderRadius="200"
            >
              {lines.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Box>
          );
        }}
      </Highlight>
      <Box position="absolute" top="3px" right=" 3px">
        <EditorButton onClick={() => copy(children)}>
          {copied ? 'Copied' : 'Copy'}
        </EditorButton>
      </Box>
    </Box>
  );
}

export default Pre;
