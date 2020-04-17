import React from 'react';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const StyledContent = styled('div')`
  margin: 20px 0;
`;

function Content(props) {
  const { children, title, description } = props;

  return (
    <StyledContent>
      <h3>{title}</h3>
      <p>{description}</p>
      <LiveProvider code={renderToStaticMarkup(children)}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </StyledContent>
  );
}

Content.displayName = 'LiveCode.Content';

Content.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Content;
