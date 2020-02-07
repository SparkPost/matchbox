import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../Grid';
import styled from 'styled-components';
import { footer, left, right } from './styles';

const OuterWrapper = styled('div')`
  ${footer}
`;

const LeftColumn = styled('div')`
  ${left}
`;

const RightColumn = styled('div')`
  ${right}
`;

function Footer(props) {
  const {
    // Left aligned content
    left,
    // Right aligned content
    right,
    ...rest
  } = props;

  return (
    <OuterWrapper {...rest}>
      <Grid>
        <Grid.Column xs={6}>
          <LeftColumn>{left}</LeftColumn>
        </Grid.Column>
        <Grid.Column xs={6}>
          <RightColumn>{right}</RightColumn>
        </Grid.Column>
      </Grid>
    </OuterWrapper>
  );
}

Footer.displayName = 'Panel.Fooger';
Footer.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Footer;
