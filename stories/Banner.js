import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Banner, Icon } from '../src';

const primaryAction = {
  content: 'Learn More',
  onClick: action('Learn More Clicked')
};

export default storiesOf('Banner', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('Default', () => (
    <Banner title='Heads up!' >
      If you're importing recipients from a previous provider, be sure to also <a>import your suppressions</a> later.
    </Banner>
  ))

  .addWithInfo('Success', () => (
    <Banner
      title='Thank you for your dedicated IP purchase'
      status='success'
      onDismiss={action('Success Dismiss Clicked')} >
      Happy Sending!
    </Banner>
  ))

  .addWithInfo('Info', () => (
    <Banner
      status='info'
      title='Verify your email address'
      action={{
        content: 'Resend Email',
        onClick: action('Resend Email Clicked')
      }}>
      Please click the link in the email we sent you to unlock the higher daily sending limits.
    </Banner>
  ))

  .addWithInfo('Warning', () => (
    <Banner title='New IPs need to be warmed up' status='warning' >
      Please read the <a href="https://support.sparkpost.com/customer/portal/articles/1972209-ip-warm-up-overview" target="_blank">IP Warm-up Overview article</a> for more information.
    </Banner>
  ))

  .addWithInfo('Danger', () => (
      <Banner
        title='Your account has been suspended due to a billing problem'
        status='danger'
        action={{
          content: 'Update Payment Information',
          onClick: action('Update Payment Info Clicked')
        }} >
        <p>To reactivate your account and pay your outstanding balance due, please update your payment information.</p>
        <p>If you have questions about your account, please contact us at billing@sparkpost.com.</p>
      </Banner>
  ))

  .addWithInfo('Fixed', () => (
      <Banner
        title='Profile Updated'
        status='success'
        onDismiss={action('Dismiss Clicked')}
        fixed
        style={{ width: '400px' }}>
      </Banner>
  ));
