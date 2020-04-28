import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import ResizeContainer from '../ResizeContainer/ResizeContainer';
import { Box } from '@sparkpost/matchbox';
import * as components from '@sparkpost/matchbox';

const StyledEditor = styled(LiveEditor)`
  background: ${tokens.color_blue_1000};
  font-size: ${tokens.fontSize_100};
`;

function Content(props) {
  const { description, code } = props;

  return (
    <Box mt="600" mb="600">
      <Box as="p" mb="500" pb="0">
        {description}
      </Box>
      <LiveProvider code={code} scope={components}>
        <ResizeContainer>
          <LivePreview />
        </ResizeContainer>
        <StyledEditor />
        <LiveError />
      </LiveProvider>
    </Box>
  );
}

Content.displayName = 'LiveCode.Content';

Content.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  description: PropTypes.string
};

export default Content;
