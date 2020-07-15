import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { getSystemProps } from '../../helpers';

import { Box, Tag, Tooltip, Inline, Text } from '@sparkpost/matchbox';

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
    <>
      <Inline space="200">
        {propsList.map((prop, i) => {
          return (
            <div key={prop}>
              <Tooltip
                key={i}
                id={`system-props-${i}`}
                content={availablePropsList(prop)}
              >
                <Tag>
                  <Text as="span" fontFamily="monospace" fontSize="100">
                    {prop}
                  </Text>
                </Tag>
              </Tooltip>
            </div>
          );
        })}
      </Inline>
      <Box
        as={Link}
        display="inline-block"
        fontSize="200"
        mt="400"
        to="/components/system-props"
      >
        Learn More
      </Box>
    </>
  );
}

SystemPropsTags.displayName = 'SystemPropsTags';
SystemPropsTags.propTypes = {
  propsList: PropTypes.array.isRequired
};

export default SystemPropsTags;
