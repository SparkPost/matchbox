import React from 'react';
import PropTypes from 'prop-types';
import { getSystemProps } from '../../helpers';

import { Box, Tag, Tooltip, Inline } from '@sparkpost/matchbox';

function SystemPropsTags(props) {
  const { propsList } = props;

  function availablePropsList(prop) {
    let availableProps = getSystemProps(prop);
    return (
      <Box>
        {availableProps.map(propName => {
          return <div key={propName}>{propName}</div>;
        })}
      </Box>
    );
  }

  return (
    <Inline space="200">
      {propsList.map((prop, i) => {
        return (
          <div key={prop}>
            <Tooltip
              key={i}
              id={`system-props-${i}`}
              content={availablePropsList(prop)}
            >
              <Tag>{prop}</Tag>
            </Tooltip>
          </div>
        );
      })}
    </Inline>
  );
}

SystemPropsTags.displayName = 'SystemPropsTags';
SystemPropsTags.propTypes = {
  propsList: PropTypes.array.isRequired
};

export default SystemPropsTags;
