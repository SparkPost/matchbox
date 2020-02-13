import React from 'react';
import PropTypes from 'prop-types';
import { buttonsFrom } from '../Button';
import styled from 'styled-components';
import { actions, header, headerText } from './styles';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';

const HeaderOuter = styled('div')`
  ${header}
  ${padding}
`;

export const HeaderText = styled('div')`
  ${headerText}
`;

const Actions = styled('div')`
  ${actions}
`;

const actionOverrides = { flat: true, size: 'small' };

const Header = ({ title, actions, ...rest }) => {
  const actionMarkup =
    actions && actions.length ? <Actions>{buttonsFrom(actions, actionOverrides)}</Actions> : null;

  return (
    <HeaderOuter {...rest}>
      <HeaderText>{title}</HeaderText>
      {actionMarkup}
    </HeaderOuter>
  );
};

Header.displayName = 'Panel.Header';
Header.propTypes = {
  title: PropTypes.node,
  accent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['orange', 'blue', 'red', 'yellow', 'green', 'gray']),
  ]),
  ...createPropTypes(padding.propNames),
};

export default Header;
