import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Banner, Picture, Video } from '@sparkpost/matchbox';

import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';
import Analytics from '@sparkpost/matchbox-media/videos/Analytics.webm';
import Analytics2 from '@sparkpost/matchbox-media/videos/Analytics.mp4';

function noop() {
  return null;
}

describe('Banner', () => {
  add('success Banner', () => {
    return (
      <Banner title="Thank you for your dedicated IP purchase" status="success" onDismiss={noop}>
        <p>Happy Sending!</p>
      </Banner>
    );
  });

  add('default Banner', () => (
    <Banner title="Heads up!" onDismiss={noop}>
      <p>
        If you&apos;re importing recipients from a previous provider, be sure to also{' '}
        <a href="https://design.sparkpost.com">import your suppressions</a> later.
      </p>
    </Banner>
  ));

  add('empty Banner', () => (
    <Banner status="muted" title="Sending Domains" onDismiss={noop}>
      <p>
        Sending domains are used to indicate who an email is from via the &quot;From:&quot; header.
        DNS records can be configured for a sending domain, which allows recipient mail servers to
        authenticate your messages.
      </p>
      <Banner.Action variant="outline" color="blue" onClick={noop}>
        Sending Domain Documentation
      </Banner.Action>
      <Banner.Media>
        <Picture seeThrough>
          <Picture.Image src={Image} />
        </Picture>
      </Banner.Media>
    </Banner>
  ));

  add('empty Banner with video', () => (
    <Banner status="muted" title="Sending Domains" onDismiss={noop}>
      <p>
        Sending domains are used to indicate who an email is from via the &quot;From:&quot; header.
        DNS records can be configured for a sending domain, which allows recipient mail servers to
        authenticate your messages.
      </p>
      <Banner.Action variant="outline" color="blue" onClick={noop}>
        Sending Domain Documentation
      </Banner.Action>
      <Banner.Media>
        <Video>
          <Video.Source src={Analytics} type="video/webm" />
          <Video.Source src={Analytics2} type="video/mp4" />
        </Video>
      </Banner.Media>
    </Banner>
  ));

  add('info Banner', () => (
    <Banner status="info" title="Verify your email address">
      <p>
        Please click the link in the email we sent you to unlock the higher daily sending limits.
      </p>
      <Banner.Action onClick={noop}>Resend Email</Banner.Action>
    </Banner>
  ));

  add('warning Banner', () => (
    <Banner title="New IPs need to be warmed up" status="warning" onDismiss={noop}>
      <p>
        Please read the{' '}
        <a
          href="https://support.sparkpost.com/customer/portal/articles/1972209-ip-warm-up-overview"
          target="_blank"
          rel="noreferrer"
        >
          IP Warm-up Overview article
        </a>{' '}
        for more information.
      </p>
    </Banner>
  ));

  add('danger Banner', () => (
    <Banner
      title="Your account has been suspended due to a billing problem"
      status="danger"
      onDismiss={noop}
    >
      <p>
        To reactivate your account and pay your outstanding balance due, please update your payment
        information.
      </p>
      <p>If you have questions about your account, please contact us at billing@sparkpost.com.</p>
      <Banner.Action onClick={noop}>Update Billing Info</Banner.Action>
      <Banner.Action outline onClick={noop}>
        Close
      </Banner.Action>
    </Banner>
  ));

  add('with actions', () => (
    <Banner title="Banner Title" status="info" onDismiss={noop}>
      <p>Banner content.</p>
      <Banner.Action onClick={noop}>Action One</Banner.Action>
      <Banner.Action outline onClick={noop}>
        Action Two
      </Banner.Action>
    </Banner>
  ));

  add('small banner', () => (
    <>
      <Banner size="small" onDismiss={noop} mb="500">
        <p>Default Banner</p>
      </Banner>
      <Banner size="small" mb="500" status="success" onDismiss={noop}>
        <p>Success Banner</p>
      </Banner>
      <Banner size="small" mb="500" status="warning" onDismiss={noop}>
        <p>Warning Banner</p>
      </Banner>
      <Banner size="small" mb="500" status="danger" onDismiss={noop}>
        <p>Danger Banner</p>
      </Banner>
      <Banner size="small" mb="500" status="info" onDismiss={noop}>
        <p>Info Banner</p>
      </Banner>
      <Banner size="small" status="warning">
        <p>
          This is the small banner with long content. This is the small banner with long content.
          This is the small banner with long content. This is the small banner with long content.
          This is the small banner with long content. This is the small banner with long content.
          This is the small banner with long content.{' '}
        </p>
      </Banner>
    </>
  ));

  add('works with system props', () => (
    <>
      <Banner title="Responsive Margin-Y" status="warning" my={['400', '600', '800', '300']}>
        <p>Set margin with system props</p>
      </Banner>
      <Banner title="Responsive Margin-X" mx={['600', '500', '900', '300']}>
        <p>Set margin with system props</p>
      </Banner>
    </>
  ));

  describe('Deprecated', () => {
    add('legacy actions', () => (
      <Banner
        title="Your account has been suspended due to a billing problem"
        status="danger"
        onDismiss={noop}
        actions={[
          {
            content: 'Update Billing Info',
            onClick: noop,
          },
          {
            content: 'Close',
            onClick: noop,
            outline: true,
          },
        ]}
      >
        <p>
          To reactivate your account and pay your outstanding balance due, please update your
          payment information.
        </p>
        <p>If you have questions about your account, please contact us at billing@sparkpost.com.</p>
      </Banner>
    ));
  });
});
