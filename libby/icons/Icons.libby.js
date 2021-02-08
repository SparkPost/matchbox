import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import * as icons from '@sparkpost/matchbox-icons';
const Assessment = icons.Assessment;
const FileType = icons.FileType;

describe('Icons', () => {
  add('single icon', () => <Assessment size={50} />);
  add('single icon with a11y label', () => <Assessment size={50} label="Accessible label!" />);

  add('extended icon', () => (
    <div>
      <FileType size={150} text="CSV" textFill="white" />
      <FileType
        size={150}
        text="WEBM"
        textProps={{
          fill: 'white',
          fontSize: '19',
          x: 17,
          y: 60,
        }}
      />
    </div>
  ));

  add('all icons', () => {
    const renderIcons = Object.keys(icons).map((name, i) => {
      const Icon = icons[name];

      return (
        <span
          key={i}
          style={{ display: 'inline-block', width: '220px', margin: '30px 0', textAlign: 'center' }}
        >
          <Icon size={50} />
          <p>
            {'<'}
            {name} {'/>'}
          </p>
        </span>
      );
    });

    return <div>{renderIcons}</div>;
  });
});
