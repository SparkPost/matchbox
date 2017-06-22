import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

import { Icon } from '../src';
import * as Icons from 'react-icons/lib/md';

const styles = {
  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },
  container: {
    display: 'inline-block',
    padding: '18px',
    textAlign: 'center',
    width: '250px'
  }
};

export default storiesOf('Icon', module)
  .add('All Icons', () => (
    <StoryContainer bg='white'>
      <p>Check <a href='https://material.io/icons/' target='_blank' style={styles.link}>here</a> for available icons.</p>
      {
        Object.keys(Icons).map((iconName, key) => {
          let name = iconName.replace('Md', '');
          return (
              <IconContainer>
                <Icon name={name} size={30} key={key} />
                <p>{ name }</p>
              </IconContainer>
            );
          }
        )
      }
    </StoryContainer>
  ));

const IconContainer = ({ children }) => (
  <div style={styles.container}>
    { children }
  </div>
);
