import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Layout, Text, Columns, Column, Page, Panel, Tag } from '@sparkpost/matchbox';

const breadcrumbAction = {
  content: 'All Domains',
};

describe('Visual Regression', () => {
  add('Page, Layout, Columns', () => {
    return (
      <Page title="Domain Details" breadcrumbAction={breadcrumbAction}>
        <Layout>
          <Layout.Section annotated data-id="annotated-section">
            <Layout.SectionTitle as="h3">Domain Status</Layout.SectionTitle>
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
    );
  });
});
