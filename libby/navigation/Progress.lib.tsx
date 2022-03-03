import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Progress } from '@sparkpost/matchbox';

describe('Progress', () => {
  add('basic usage', () => (
    <Progress>
      <Progress.Step to="#one" completed>
        Completed
      </Progress.Step>
      <Progress.Step to="#two" completed>
        Completed
      </Progress.Step>
      <Progress.Step to="#three" selected>
        Selected
      </Progress.Step>
      <Progress.Step to="#four">Not Completed</Progress.Step>
      <Progress.Step to="#five">Not Completed</Progress.Step>
    </Progress>
  ));

  add('disabled', () => (
    <Progress>
      <Progress.Step to="#one" completed disabled>
        Completed
      </Progress.Step>
      <Progress.Step to="#two" completed disabled>
        Completed
      </Progress.Step>
      <Progress.Step to="#three" selected disabled>
        Selected
      </Progress.Step>
      <Progress.Step to="#four" disabled>
        Not Completed
      </Progress.Step>
      <Progress.Step to="#five" disabled>
        Not Completed
      </Progress.Step>
    </Progress>
  ));

  // add('system props', () => (
  //   <>
  //     <Breadcrumb mb="600">
  //       <Breadcrumb.Link to="#one">Link One</Breadcrumb.Link>
  //       <Breadcrumb.Link to="#two" active>
  //         Link Two
  //       </Breadcrumb.Link>
  //     </Breadcrumb>
  //     <Panel>
  //       <Panel.Section>
  //         <Panel.Header>Panel Header</Panel.Header>
  //       </Panel.Section>
  //     </Panel>
  //   </>
  // ));
});
