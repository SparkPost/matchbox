import React from 'react';
import PropTypes from 'prop-types';
import { buttonsFrom } from '../Button';
import styled from 'styled-components';
import { actions, header, headerText } from './styles';

const HeaderOuter = styled('div')`
  ${header}
`;

export const HeaderText = styled('div')`
  ${headerText}
`;

const Actions = styled('div')`
  ${actions}
`;

const actionOverrides = { flat: true, size: 'small' };

const Header = ({ title, actions }) => {
  const actionMarkup =
    actions && actions.length ? <Actions>{buttonsFrom(actions, actionOverrides)}</Actions> : null;

  return (
    <HeaderOuter>
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
};

export default Header;
