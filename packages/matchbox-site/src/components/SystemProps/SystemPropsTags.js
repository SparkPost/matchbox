import React from 'react';
import PropTypes from 'prop-types';
import { getSystemProps } from '../../helpers';

import { Box, Tag, Tooltip } from '@sparkpost/matchbox';

function SystemPropsTags(props) {
  const { propsList } = props;

  console.log(Tooltip.propTypes);

  function availablePropsList(prop) {
    let availableProps = getSystemProps(prop);
    return (
      <Box>
        {availableProps.map(propName => {
          return <div>{propName}</div>;
        })}
      </Box>
    );
  }

  return (
    <Box>
      {propsList.map(prop => {
        return (
          <Tooltip width="175px" key={prop} content={availablePropsList(prop)}>
            <Tag mr="200">{prop}</Tag>
          </Tooltip>
        );
      })}
    </Box>
  );
}

SystemPropsTags.displayName = 'SystemPropsTags';
SystemPropsTags.propTypes = {
  propsList: PropTypes.array.isRequired
};

export default SystemPropsTags;
