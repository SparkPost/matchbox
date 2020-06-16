import React from 'react';
import { Box } from '@sparkpost/matchbox';
import { tokens, meta } from '@sparkpost/design-tokens';
import { propData } from './data';
import _ from 'lodash';

function Td(props) {
  return (
    <Box as="td" py="200" pr="400" fontSize="200" lineHeight="200" {...props} />
  );
}

function Th(props) {
  return (
    <Box
      as="th"
      textAlign="left"
      fontSize="200"
      lineHeight="200"
      color="gray.900"
      fontWeight="400"
      pb="200"
      {...props}
    />
  );
}

function Tr(props) {
  return <Box as="tr" {...props} />;
}

function SystemPropsTable(props) {
  const data = propData[props.theme];

  return (
    <Box mb="800" mt="400">
      <Box as="table" width="100%">
        <thead>
          <Tr borderBottom={`2px solid ${tokens.color_gray_200}`}>
            <Th width="25%">{_.isArray(data) ? 'Array Index' : 'Key'}</Th>
            <Th width="33%">JS Token</Th>
            <Th>Value</Th>
          </Tr>
        </thead>
        <tbody>
          {_.map(_.keys(data), key => {
            const metadata = _.find(meta, ['javascript', data[key]]) || {};
            return (
              <Tr key={key}>
                <Td>{key}</Td>
                <Td>{metadata.value ? data[key] : null}</Td>
                <Td>{metadata.value ? metadata.value : data[key]}</Td>
              </Tr>
            );
          })}
        </tbody>
      </Box>
    </Box>
  );
}

export default SystemPropsTable;
