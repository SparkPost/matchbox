import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Banner } from '@sparkpost/matchbox';

const primaryAction = {
  content: 'Learn More',
  onClick: action('Learn More Clicked')
};

storiesOf('Feedback|Banner', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('Default', withInfo()(() => (
    <Banner title='Heads up!' >
      If you're importing recipients from a previous provider, be sure to also <a>import your suppressions</a> later.
    </Banner>
  )))

  .add('Success', withInfo()(() => (
    <Banner
      title='Thank you for your dedicated IP purchase'
      status='success'
      onDismiss={action('Success Dismiss Clicked')} >
      Happy Sending!
    </Banner>
  )))

  .add('Info', withInfo()(() => (
    <Banner
      status='info'
      title='Verify your email address'
      action={{
        content: 'Resend Email',
        onClick: action('Resend Email Clicked')
      }}>
      Please click the link in the email we sent you to unlock the higher daily sending limits.
    </Banner>
  )))

  .add('Warning', withInfo()(() => (
    <Banner title='New IPs need to be warmed up' status='warning' >
      Please read the <a href="https://support.sparkpost.com/customer/portal/articles/1972209-ip-warm-up-overview" target="_blank">IP Warm-up Overview article</a> for more information.
    </Banner>
  )))

  .add('Danger', withInfo()(() => (
      <Banner
        title='Your account has been suspended due to a billing problem'
        status='danger'
        actions={[{
          content: 'Update Payment Information',
          onClick: action('Update Payment Info Clicked')
        }, {
          content: 'Close',
          onClick: action('Close Clicked')
        }]}>
        <p>To reactivate your account and pay your outstanding balance due, please update your payment information.</p>
        <p>If you have questions about your account, please contact us at billing@sparkpost.com.</p>
      </Banner>
  )));
