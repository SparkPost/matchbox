import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../storyHelpers/StoryContainer';

import * as icons from '@sparkpost/matchbox-icons';
import { IconBase } from '@sparkpost/matchbox-icons/IconBase';
const Assessment = icons.Assessment;
const FileType = icons.FileType;

storiesOf('Icons|matchbox-icons', module)
  .addDecorator((getStory) => (
    <StoryContainer>{getStory()}</StoryContainer>
  ))

  .add('single icon', withInfo({ propTables: [IconBase], propTablesExclude: [Assessment]})(() => (
    <Assessment size={50} />
  )))

  .add('single icon with a11y label', withInfo({ propTables: [IconBase], propTablesExclude: [Assessment]})(() => (
    <Assessment size={50} label='Accessible label!' />
  )))

  .add('extended icons', withInfo({ propTables: [IconBase], propTablesExclude: [FileType]})(() => (
    <div>
      <FileType size={150} text='CSV' textFill='white' />
      <FileType size={150} text='WEBM' textProps={{
        fill: 'white',
        fontSize: '19',
        x: 17,
        y: 60
      }} />
    </div>
  )))

  .add('all icons', () => {
    const renderIcons = Object.keys(icons).map((name, i) => {
      const Icon = icons[name];

      return (
        <span style={{ display: 'inline-block', width: '220px', margin: '30px 0', textAlign: 'center' }}>
          <Icon size={50} />
          <p>{'<'}{name} {'/>'}</p>
        </span>
      );
    });

    return <div>{renderIcons}</div>;
  });
