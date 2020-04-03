import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronRight } from '@sparkpost/matchbox-icons';
import { pre, code, prefix, line, chevron } from './styles';

const StyledPre = styled('pre')`
  ${pre}
`;

const StyledCode = styled('code')`
  ${code}
`;

const StyledCodePrefix = styled('div')`
  ${prefix}
`;

const StyledLineNumber = styled('span')`
  ${line}
`;

const StyledChevron = styled(ChevronRight)`
  ${chevron}
`;

function CodeBlock(props) {
  const { children, code, height, className, numbered, dark } = props;

  return (
    <StyledPre
      className={className}
      style={{ height: height ? `${height}px` : 'auto' }}
      dark={dark}
    >
      <CodePrefix dark={dark} code={code} numbered={numbered} />

      <StyledCode dark={dark}>
        {/* If children are passed in, render those, and pass in the code as a child of that element */}
        {children ? (
          React.Children.map(children, child => {
            return React.cloneElement(child, { children: code });
          })
        ) : (
          <>{code}</>
        )}
      </StyledCode>
    </StyledPre>
  );
}

function CodePrefix({ code, numbered, dark }) {
  const rows = code.split(/\r\n|\r|\n/);

  return (
    <StyledCodePrefix aria-hidden="true">
      {rows.map((_row, rowIndex) => {
        const key = `code-block-row-${rowIndex}`;

        if (numbered) {
          return (
            <StyledLineNumber dark={dark} key={key}>
              {rowIndex + 1} {/* Line numbers in code editors do not start with "0"*/}
            </StyledLineNumber>
          );
        }

        return (
          <StyledLineNumber dark={dark} key={key}>
            <StyledChevron />
          </StyledLineNumber>
        );
      })}
    </StyledCodePrefix>
  );
}

CodeBlock.propTypes = {
  /**
   * The string of code to render
   */
  code: PropTypes.string,
  className: PropTypes.string,
  /**
   * Height in pixels of the <pre> block
   */
  height: PropTypes.number,
  /**
   * Render line numbers
   */
  numbered: PropTypes.bool,
  /**
   * Whether the code block is styled dark or light
   */
  dark: PropTypes.bool,
};

CodeBlock.defaultProps = {
  numbered: false,
  dark: false,
};

export default CodeBlock;
