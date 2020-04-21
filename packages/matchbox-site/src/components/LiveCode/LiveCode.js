import React, { useState } from 'react';
import Content from './LiveCodeContent';
import { Select, Box } from '@sparkpost/matchbox';

function LiveCode(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { children } = props;

  function updateIndex(event) {
    const index = Number(event.target.value);
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

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Box as="h6" m="0">
          Examples
        </Box>
        <Box pl={500} flex="1">
          <Select
            id="code-example-select"
            onChange={updateIndex}
            options={getOptionsFromChildren()}
          />
        </Box>
      </Box>
      {children.map((child, index) => {
        if (index == activeIndex) {
          return <div>{child}</div>;
        }

        return null;
      })}
    </div>
  );
}
LiveCode.displayName = 'LiveCode';
LiveCode.Content = Content;

export default LiveCode;
