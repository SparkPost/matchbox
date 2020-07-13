import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Box } from '@sparkpost/matchbox';

function Pre(props) {
  const { children } = props;
  let language = '';

  if (!children.props.children) {
    return null;
  }

  if (children.props.className) {
    language = children.props.className.replace('language-', '');
  }

  return (
    <Box bg="gray.100" p="600" mb="400" borderRadius="200" overflow="scroll">
      <SyntaxHighlighter
        language={language}
        style={coy}
        customStyle={{
          whiteSpace: 'pre-wrap',
          marginBottom: 0,
          marginTop: 0,
          backgroundColor: 'transparent'
        }}
        codeTagProps={{}} // Removes <code> inline
      >
        {children.props.children}
      </SyntaxHighlighter>
    </Box>
  );
}

export default Pre;
