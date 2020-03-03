import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider, Inline, Tag } from '@sparkpost/matchbox';
import { Language } from '@sparkpost/matchbox-icons';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Feedback|Tag',
};

export const TagWithRemove = withInfo()(() => (
  <Tag onRemove={action('Tag Remove')} className="test-class">
    domain.com
    <Language />
  </Tag>
));

export const Colors = withInfo()(() => (
  <Inline space="100">
    <Tag onRemove={action('Tag Remove')} color="orange">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="blue">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="navy">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="yellow">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="green">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="red">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="magenta">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="purple">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="teal">
      domain.com
    </Tag>
    <Tag onRemove={action('Tag Remove')} color="darkGray">
      domain.com
    </Tag>
    <Tag>domain.com</Tag>
  </Inline>
));

export const SystemProps = withInfo()(() => (
  <Inline space="100">
    <Tag mr="800">domain.com</Tag>
    <Tag my={['500', '700', '300']}>domain.com</Tag>
  </Inline>
));
