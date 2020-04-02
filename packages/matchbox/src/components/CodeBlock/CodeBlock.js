import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pre, code, prefix, line } from './styles';

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

function CodeBlock(props) {
  const { code, height, className } = props;

  return (
    <StyledPre className={className} height={height ? `${height}px` : 'auto'}>
      <CodePrefix code={code} />

      <StyledCode>{code}</StyledCode>
    </StyledPre>
  );
}

function CodePrefix({ code }) {
  const rows = code.split(/\r\n|\r|\n/);

  return (
    <StyledCodePrefix aria-hidden="true">
      {rows.map((_row, rowIndex) => (
        <StyledLineNumber key={`code-block-row-${rowIndex}`}>{rowIndex}</StyledLineNumber>
      ))}
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
  dark: PropTypes.bool,
};

CodeBlock.defaultProps = {
  numbered: true,
};

export default CodeBlock;
