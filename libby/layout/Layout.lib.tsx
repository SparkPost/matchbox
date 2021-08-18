import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore
import { Page, Panel, Box, Text, Columns, Column, Tag } from '@sparkpost/matchbox';
import { Layout } from '@sparkpost/matchbox';

function DemoBox({ children }) {
  return (
    <Box p="300" width="100%" bg="blue.300">
      {children}
    </Box>
  );
}

const breadcrumbAction = {
  content: 'All Domains',
};

describe('Layout', () => {
  add('column example', () => (
    <>
      <Layout>
        <Layout.Section>
          <DemoBox>One Column Layout</DemoBox>
        </Layout.Section>
      </Layout>
      <Layout>
        <Layout.Section>
          <DemoBox>Two Column Layout</DemoBox>
        </Layout.Section>
        <Layout.Section>
          <DemoBox>Two Column Layout</DemoBox>
        </Layout.Section>
      </Layout>
    </>
  ));

  add('collapsed below', () => (
    <>
      <Layout collapseBelow="lg">
        <Layout.Section>
          <DemoBox>Three Column Layout</DemoBox>
        </Layout.Section>
        <Layout.Section>
          <DemoBox>Three Column Layout</DemoBox>
        </Layout.Section>
        <Layout.Section>
          <DemoBox>Three Column Layout</DemoBox>
        </Layout.Section>
      </Layout>
    </>
  ));

  add('annotated example in page', () => (
    <Page title="Domain Details" breadcrumbAction={breadcrumbAction}>
      <Layout>
        <Layout.Section annotated data-id="annotated-section">
          <Layout.SectionTitle>Domain Status TITLE</Layout.SectionTitle>
          <Text fontSize="200" color="gray.700">
            Domain status text
          </Text>
        </Layout.Section>
        <Layout.Section data-id="detail-section">
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
      </Layout>
      <Layout>
        <Layout.Section>
          <Panel>
            <Panel.Section>
              <Text>Below are the records for this domain hosted at Go-Daddy</Text>
            </Panel.Section>
            <Panel.Section>
              <Text>TXT Record details here</Text>
            </Panel.Section>
          </Panel>
        </Layout.Section>
        <Layout.Section annotated>
          <Layout.SectionTitle>DNS Details</Layout.SectionTitle>
          <Text fontSize="200" color="gray.700">
            Something about these records being successfully placed in Go-Daddy?
          </Text>
        </Layout.Section>
      </Layout>
    </Page>
  ));
});
