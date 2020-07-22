import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Page, Layout, Panel, Box, Text, Columns, Column, Tag } from '@sparkpost/matchbox';

export default {
  title: 'Layout|Layout',
};

function DemoBox({ children }) {
  return (
    <Box p="300" width="100%" bg="blue.300">
      {children}
    </Box>
  );
}

const breadcrumbAction = {
  content: 'All Domains',
  onClick: action('All Domains Clicked'),
};

export const ColumnExample = withInfo()(() => (
  <Layout>
    <Layout.Section variant="oneColumn">
      <DemoBox>One Column Layout</DemoBox>
    </Layout.Section>
    <Layout.Section variant="twoColumn">
      <DemoBox>Two Column Layout</DemoBox>
    </Layout.Section>
    <Layout.Section variant="twoColumn">
      <DemoBox>Two Column Layout</DemoBox>
    </Layout.Section>
  </Layout>
));

export const AnnotatedExample = withInfo()(() => (
  <Page title="Domain Details" breadcrumbAction={breadcrumbAction}>
    <Layout>
      <Layout.Section variant="annotatedLeft">
        <Text as="h4" mb="300">
          Domain Status
        </Text>
        <Text fontSize="200" color="gray.700">
          Domain status text
        </Text>
      </Layout.Section>
      <Layout.Section variant="annotatedRight">
        <Panel>
          <Panel.Section>
            <Columns collapseBelow="md">
              <Column width={2 / 6}>
                <Text as="h6">Domain</Text>
                <Text fontWeight="light" mt="300">
                  domainnamegoeshere.com
                </Text>
              </Column>
              <Column width={3 / 6}>
                <Text as="h6">Status</Text>
                <Tag mt="300">Bounce</Tag>
              </Column>
              <Column width={1 / 6}>
                <Text as="h6">Date added</Text>
                <Text fontWeight="light" mt="300">
                  Jan 9, 2020
                </Text>
              </Column>
            </Columns>
          </Panel.Section>
          <Panel.Section>
            <Text as="h6">Subaccount Assignment</Text>
            <Text fontWeight="light" mt="300">
              Subaccount_012345
            </Text>
          </Panel.Section>
        </Panel>
      </Layout.Section>

      <Layout.Section variant="annotatedLeft">
        <Text as="h4" mb="300">
          DNS Details
        </Text>
        <Text fontSize="200" color="gray.700">
          Something about these records being successfully placed in Go-Daddy?
        </Text>
      </Layout.Section>
      <Layout.Section variant="annotatedRight">
        <Panel>
          <Panel.Section>
            <Text>Below are the records for this domain hosted at Go-Daddy</Text>
          </Panel.Section>
          <Panel.Section>
            <Text>TXT Record details here</Text>
          </Panel.Section>
        </Panel>
      </Layout.Section>
    </Layout>
  </Page>
));
