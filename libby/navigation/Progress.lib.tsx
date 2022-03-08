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

  add('system props', () => (
    <Progress mx="600" my="200">
      <Progress.Step to="#one" completed>
        Completed
      </Progress.Step>
      <Progress.Step to="#two">Not Completed</Progress.Step>
    </Progress>
  ));
});
