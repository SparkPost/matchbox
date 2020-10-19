import React from 'react';
import * as icons from '@sparkpost/matchbox-icons';
const Assessment = icons.Assessment;
const FileType = icons.FileType;

export default {
  title: 'Icons/matchbox-icons',
};

export const SingleIcon = () => <Assessment size={50} />;

export const SingleIconWithA11yLabel = () => <Assessment size={50} label="Accessible label!" />;

export const ExtendedIcons = () => (
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
);

export const AllIcons = () => {
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
};
