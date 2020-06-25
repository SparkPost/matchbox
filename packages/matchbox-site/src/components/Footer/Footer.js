import React from 'react';
import { Box, Columns, Column } from '@sparkpost/matchbox';
import styled from 'styled-components';
import ExternalLink from '../ExternalLink';
import matchboxPkg from '../../../../matchbox/package.json';
import { tokens } from '@sparkpost/design-tokens';

const Wrapper = styled(Box)`
  a,
  a:visited {
    font-weight: ${props => props.theme.fontWeights['medium']};
    font-size: ${props => props.theme.fontSizes['300']};
    color: ${props => props.theme.colors.gray['900']};
    &:hover {
      color: ${props => props.theme.colors.blue['700']};
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;

  li {
    flex: 0;
    margin-left: ${props => props.theme.sizes['600']};

    a {
      text-decoration: none;
    }
  }
`;

function Footer() {
  return (
    <Wrapper
      as="footer"
      mt="800"
      py="800"
      borderTop={`2px solid ${tokens.color_gray_200}`}
    >
      <Columns>
        <Column>
          <Box fontSize="300" lineHeight="300">
            <Box fontWeight="medium">
              Have questions or feedback? Open an issue on{' '}
              <ExternalLink to="https://github.com/SparkPost/matchbox/issues/new/choose">
                Github
              </ExternalLink>
              .
            </Box>
            <div>Latest v{matchboxPkg.version}</div>
          </Box>
        </Column>
        <Column>
          <List>
            <li>
              <ExternalLink to="https://github.com/SparkPost/matchbox">
                Contribute
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://matchbox-storybook.netlify.app">
                Storybook
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://matchbox-playroom.netlify.app">
                Playroom
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://sparkpost.com">
                sparkpost.com
              </ExternalLink>
            </li>
          </List>
        </Column>
      </Columns>
    </Wrapper>
  );
}

export default Footer;
