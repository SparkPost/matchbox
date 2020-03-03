import React, { useContext } from 'react';
import { Box } from '@sparkpost/matchbox';
import Heading from '../Heading';
import { tokens } from '@sparkpost/design-tokens';
import { ThemeContext } from 'styled-components';
import _ from 'lodash';

function Td(props) {
  return <Box as="td" py="200" pr="400" {...props} />;
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
      {...props}
    />
  );
}

function Tr(props) {
  return <Box as="tr" {...props} />;
}

function Body({ category, theme }) {
  if (_.isArray(theme[category])) {
    const values = theme[category];
    return (
      <tr>
        {_.map(values, value => {
          return (
            <Tr key={value}>
              <Td
                as="td"
                fontFamily="monospace"
                color="gray.900"
                fontSize="100"
                lineHeight="100"
              >
                {value}
              </Td>
            </Tr>
          );
        })}
      </tr>
    );
  }

  return (
    <>
      {_.map(_.keys(theme[category]), key => {
        const data = theme[category][key];
        if (!_.isObject(data)) {
          return (
            <Tr key={`${key}-${data}`}>
              <Td
                fontFamily="monospace"
                color="gray.900"
                fontSize="100"
                lineHeight="100"
              >
                {key}
              </Td>
              <Td
                key={data}
                fontFamily="monospace"
                color="gray.900"
                fontSize="100"
                lineHeight="100"
              >
                {data}
              </Td>
            </Tr>
          );
        }

        return (
          <>
            {_.map(_.keys(data), k => {
              console.log(k, data[k]);
              return (
                <Tr key={`${k}-${data[k]}`}>
                  <Td
                    fontFamily="monospace"
                    color="gray.900"
                    fontSize="100"
                    lineHeight="100"
                  >
                    {key}.{k}
                  </Td>
                  <Td
                    key={data[k]}
                    fontFamily="monospace"
                    color="gray.900"
                    fontSize="100"
                    lineHeight="100"
                  >
                    {data[k]}
                  </Td>
                </Tr>
              );
            })}
          </>
        );
      })}
    </>
  );
}

function Table() {
  const theme = useContext(ThemeContext);
  const keys = _.keys(theme);

  return (
    <>
      {_.map(keys, key => {
        return (
          <Box mb="800" key={key}>
            <Heading as="h6">{key}</Heading>
            <Box as="table" width="100%">
              <thead>
                <Tr borderBottom={`2px solid ${tokens.color_gray_200}`}>
                  <Th pb="200" width="10rem">
                    {_.isArray(theme[key]) ? 'Array Values' : 'Key'}
                  </Th>
                  {!_.isArray(theme[key]) && <Th pb="200">Value</Th>}
                </Tr>
              </thead>
              <tbody>
                <Body theme={theme} category={key} />
              </tbody>
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default Table;
