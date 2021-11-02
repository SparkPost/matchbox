import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Breadcrumb, Panel } from '@sparkpost/matchbox';

describe('Breadcrumb', () => {
  add('basic usage', () => (
    <Breadcrumb>
      <Breadcrumb.Link to="#one">Link One</Breadcrumb.Link>
      <Breadcrumb.Link to="#two" active>
        Link Two
      </Breadcrumb.Link>
    </Breadcrumb>
  ));

  add('system props', () => (
    <>
      <Breadcrumb mb="600">
        <Breadcrumb.Link to="#one">Link One</Breadcrumb.Link>
        <Breadcrumb.Link to="#two" active>
          Link Two
        </Breadcrumb.Link>
      </Breadcrumb>
      <Panel>
        <Panel.Section>
          <Panel.Header>Panel Header</Panel.Header>
        </Panel.Section>
      </Panel>
    </>
  ));
});
