import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import { Box, useCopyToClipboard, styles } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';

const StyledButton = styled(Box)`
  ${styles.buttonReset};
  ${styles.focusOutline({ offset: '0px', color: tokens.color_gray_700 })};
  cursor: pointer;
  ${({ theme }) => `
    background: transparent;
    color: ${theme.colors.gray[700]};
    padding: ${theme.space[200]} ${theme.space[300]};
    font-size: ${theme.fontSizes[100]}
    &:hover {
      color: ${theme.colors.gray[900]};
    }
  `}
`;

function CopyButton(props) {
  return (
    <StyledButton
      as="button"
      background="gray.300"
      color="red.200"
      {...props}
    />
  );
}

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
        <CopyButton onClick={() => copy(children)}>
          {copied ? 'Copied' : 'Copy'}
        </CopyButton>
      </Box>
    </Box>
  );
}

export default Pre;
