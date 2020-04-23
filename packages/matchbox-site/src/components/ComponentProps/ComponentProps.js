import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { useComponentProps, getPrettyType } from '../../helpers';
import { Box } from '@sparkpost/matchbox';
import _ from 'lodash';

function ComponentProps(props) {
  const { component } = props;

  const data = useComponentProps(component);

  return (
    <div>
      {data.props.map(componentProps => {
        return <ComponentPropsRow {...componentProps} />;
      })}
    </div>
  );
}

function ComponentPropsRow(props) {
  const { name, description, required, type, defaultValue } = props;

  const formattedDefaultValue = _.get(defaultValue, 'value');

  return (
    <Box mb="600">
      <Box display="flex" alignItems="center">
        <Box
          as="h6"
          fontSize="400"
          m="0"
          mb="100"
          mr="300"
          color={tokens.color_blue_700}
        >
          {name}
        </Box>
        {required && (
          <Box as="span" fontSize="100" color={tokens.color_gray_600}>
            Required
          </Box>
        )}
      </Box>
      <Box display="flex">
        <Box mr="800">
          <Box
            as="label"
            display="inline"
            mr="300"
            fontSize="100"
            fontWeight="bold"
          >
            Type
          </Box>
          <Box
            as="p"
            display="inline"
            mb="200"
            fontWeight="regular"
            fontSize="100"
          >
            {getPrettyType(type)}
          </Box>
        </Box>
        {formattedDefaultValue && (
          <Box mr="800">
            <Box
              as="label"
              display="inline"
              mr="300"
              fontSize="100"
              fontWeight="bold"
            >
              Default Value
            </Box>
            <Box
              as="p"
              display="inline"
              mb="200"
              fontWeight="regular"
              fontSize="100"
            >
              {formattedDefaultValue}
            </Box>
          </Box>
        )}
      </Box>
      <Box as="p" m="0" color={tokens.color_gray_600} fontSize="300">
        {description.text}
      </Box>
    </Box>
  );
}

ComponentPropsRow.displayName = 'ComponentProps.Row';
ComponentPropsRow.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.object,
  defaultValue: PropTypes.any
};

ComponentProps.displayName = 'ComponentProps';
ComponentProps.propTypes = {
  component: PropTypes.string.isRequired
};

export default ComponentProps;
