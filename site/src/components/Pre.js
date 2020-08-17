import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import palenight from 'prism-react-renderer/themes/palenight';
import { Box } from '@sparkpost/matchbox';

// See https://github.com/FormidableLabs/prism-react-renderer
function Pre(props) {
  let language = '';
  const { children = '', className = '' } = props.children.props;

  if (!children) {
    return null;
  }

  if (children) {
    language = className.replace('language-', '');
  }

  return (
    <Box bg="gray.1000" p="600" mb="400" borderRadius="200" overflow="scroll">
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={palenight}
      >
        {({ tokens, getLineProps, getTokenProps }) => {
          const lines = tokens.slice(0, tokens.length - 1);
          return (
            <Box
              as="pre"
              style={{ whiteSpace: 'pre-wrap' }}
              mb="0"
              lineHeight="300"
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
    </Box>
  );
}

export default Pre;
