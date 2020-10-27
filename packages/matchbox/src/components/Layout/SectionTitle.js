import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../Text';

function SectionTitle(props) {
  const { children, as } = props;

  return (
    <Text
      as={as}
      fontSize={['300', null, '400']}
      lineHeight={['300', null, '400']}
      pb="300"
      data-id={props['data-id']}
    >
      {children}
    </Text>
  );
}

SectionTitle.propTypes = {
  as: PropTypes.elementType,
  'data-id': PropTypes.string,
};

SectionTitle.defaultProps = {
  as: 'h2',
};

SectionTitle.displayName = 'Layout.SectionTitle';

export default SectionTitle;
