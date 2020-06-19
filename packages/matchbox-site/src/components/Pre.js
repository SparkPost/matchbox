import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Box } from '@sparkpost/matchbox';

function Pre(props) {
  const { children } = props;

  if (!children.props.children) {
    return null;
  }

  const language = children.props.className.replace('language-', '');

  return (
    <Box bg="gray.100" p="600" mb="400" borderRadius="200">
      <SyntaxHighlighter
        language={language}
        style={coy}
        customStyle={{
          padding: 0,
          backgroundColor: 'transparent'
        }}
      >
        {children.props.children}
      </SyntaxHighlighter>
    </Box>
  );
}

export default Pre;
