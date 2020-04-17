import React, { useState } from 'react';
import Content from './LiveCodeContent';
import { Select } from '@sparkpost/matchbox';

function LiveCode(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { children } = props;

  function updateIndex(event) {
    const index = event.target.value;
    setActiveIndex(index);
  }

  function getOptionsFromChildren() {
    return children.map((child, index) => {
      return {
        value: index,
        label: child.props.title
      };
    });
  }
  console.log(getOptionsFromChildren());
  return (
    <div>
      <h5>Example</h5>
      <Select
        id="code-example-select"
        onChange={updateIndex}
        options={getOptionsFromChildren()}
      />
      {children.map((child, index) => {
        if (index == activeIndex) {
          return <div>{child}</div>;
        }
      })}
    </div>
  );
}
LiveCode.displayName = 'LiveCode';
LiveCode.Content = Content;

export default LiveCode;
