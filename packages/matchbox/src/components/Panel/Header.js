import React from 'react';
import { buttonsFrom } from '../Button';
import styled from 'styled-components';
import { actions, header, headerText } from './styles';

const HeaderOuter = styled('div')`
  ${header}
`;

const HeaderText = styled('div')`
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

export default Header;
