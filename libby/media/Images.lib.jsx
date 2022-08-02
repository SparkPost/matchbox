import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Text, Picture } from '@sparkpost/matchbox';

import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';

import AccountsJPG from '@sparkpost/matchbox-media/images/Accounts.jpg';
import BillingJPG from '@sparkpost/matchbox-media/images/Billing.jpg';
import ConfigurationJPG from '@sparkpost/matchbox-media/images/Configuration.jpg';
import EmailTemplateJPG from '@sparkpost/matchbox-media/images/Email-Template.jpg';
import ErrorJPG from '@sparkpost/matchbox-media/images/Error.jpg';
import FlaggingJPG from '@sparkpost/matchbox-media/images/Flagging.jpg';
import SendingMailJPG from '@sparkpost/matchbox-media/images/Sending-Mail.jpg';
import AnalyticsJPG from '@sparkpost/matchbox-media/images/Analytics.jpg';
import RecipientValidationJPG from '@sparkpost/matchbox-media/images/Recipient-Validation.jpg';
import SignupJPG from '@sparkpost/matchbox-media/images/Signup.jpg';

import AccountsPNG from '@sparkpost/matchbox-media/images/Accounts.png';
import BillingPNG from '@sparkpost/matchbox-media/images/Billing.png';
import ConfigurationPNG from '@sparkpost/matchbox-media/images/Configuration.png';
import EmailTemplatePNG from '@sparkpost/matchbox-media/images/Email-Template.png';
import ErrorPNG from '@sparkpost/matchbox-media/images/Error.png';
import FlaggingPNG from '@sparkpost/matchbox-media/images/Flagging.png';
import SendingMailPNG from '@sparkpost/matchbox-media/images/Sending-Mail.png';
import AnalyticsPNG from '@sparkpost/matchbox-media/images/Analytics.png';
import RecipientValidationPNG from '@sparkpost/matchbox-media/images/Recipient-Validation.png';
import SignupPNG from '@sparkpost/matchbox-media/images/Signup.jpg';

import AccountsWEBP from '@sparkpost/matchbox-media/images/Accounts.webp';
import BillingWEBP from '@sparkpost/matchbox-media/images/Billing.webp';
import ConfigurationWEBP from '@sparkpost/matchbox-media/images/Configuration.webp';
import EmailTemplateWEBP from '@sparkpost/matchbox-media/images/Email-Template.webp';
import ErrorWEBP from '@sparkpost/matchbox-media/images/Error.webp';
import FlaggingWEBP from '@sparkpost/matchbox-media/images/Flagging.webp';
import SendingMailWEBP from '@sparkpost/matchbox-media/images/Sending-Mail.webp';
import AnalyticsWEBP from '@sparkpost/matchbox-media/images/Analytics.webp';
import RecipientValidationWEBP from '@sparkpost/matchbox-media/images/Recipient-Validation.webp';
import SignupWEBP from '@sparkpost/matchbox-media/images/Signup.webp';

import AccountsMEDIUMJPG from '@sparkpost/matchbox-media/images/Accounts@medium.jpg';
import BillingMEDIUMJPG from '@sparkpost/matchbox-media/images/Billing@medium.jpg';
import ConfigurationMEDIUMJPG from '@sparkpost/matchbox-media/images/Configuration@medium.jpg';
import EmailTemplateMEDIUMJPG from '@sparkpost/matchbox-media/images/Email-Template@medium.jpg';
import ErrorMEDIUMJPG from '@sparkpost/matchbox-media/images/Error@medium.jpg';
import FlaggingMEDIUMJPG from '@sparkpost/matchbox-media/images/Flagging@medium.jpg';
import SendingMailMEDIUMJPG from '@sparkpost/matchbox-media/images/Sending-Mail@medium.jpg';
import AnalyticsMEDIUMJPG from '@sparkpost/matchbox-media/images/Analytics@medium.jpg';
import RecipientValidationMEDIUMJPG from '@sparkpost/matchbox-media/images/Recipient-Validation@medium.jpg';
import SignupMEDIUMJPG from '@sparkpost/matchbox-media/images/Signup@medium.jpg';

import AccountsMEDIUMPNG from '@sparkpost/matchbox-media/images/Accounts@medium.png';
import BillingMEDIUMPNG from '@sparkpost/matchbox-media/images/Billing@medium.png';
import ConfigurationMEDIUMPNG from '@sparkpost/matchbox-media/images/Configuration@medium.png';
import EmailTemplateMEDIUMPNG from '@sparkpost/matchbox-media/images/Email-Template@medium.png';
import ErrorMEDIUMPNG from '@sparkpost/matchbox-media/images/Error@medium.png';
import FlaggingMEDIUMPNG from '@sparkpost/matchbox-media/images/Flagging@medium.png';
import SendingMailMEDIUMPNG from '@sparkpost/matchbox-media/images/Sending-Mail@medium.png';
import AnalyticsMEDIUMPNG from '@sparkpost/matchbox-media/images/Analytics@medium.png';
import RecipientValidationMEDIUMPNG from '@sparkpost/matchbox-media/images/Recipient-Validation@medium.png';
import SignupMEDIUMPNG from '@sparkpost/matchbox-media/images/Signup@medium.png';

import AccountsMEDIUMWEBP from '@sparkpost/matchbox-media/images/Accounts@medium.webp';
import BillingMEDIUMWEBP from '@sparkpost/matchbox-media/images/Billing@medium.webp';
import ConfigurationMEDIUMWEBP from '@sparkpost/matchbox-media/images/Configuration@medium.webp';
import EmailTemplateMEDIUMWEBP from '@sparkpost/matchbox-media/images/Email-Template@medium.webp';
import ErrorMEDIUMWEBP from '@sparkpost/matchbox-media/images/Error@medium.webp';
import FlaggingMEDIUMWEBP from '@sparkpost/matchbox-media/images/Flagging@medium.webp';
import SendingMailMEDIUMWEBP from '@sparkpost/matchbox-media/images/Sending-Mail@medium.webp';
import AnalyticsMEDIUMWEBP from '@sparkpost/matchbox-media/images/Analytics@medium.webp';
import RecipientValidationMEDIUMWEBP from '@sparkpost/matchbox-media/images/Recipient-Validation@medium.webp';
import SignupMEDIUMWEBP from '@sparkpost/matchbox-media/images/Signup@medium.webp';

import AccountsSMALLJPG from '@sparkpost/matchbox-media/images/Accounts@small.jpg';
import BillingSMALLJPG from '@sparkpost/matchbox-media/images/Billing@small.jpg';
import ConfigurationSMALLJPG from '@sparkpost/matchbox-media/images/Configuration@small.jpg';
import EmailTemplateSMALLJPG from '@sparkpost/matchbox-media/images/Email-Template@small.jpg';
import ErrorSMALLJPG from '@sparkpost/matchbox-media/images/Error@small.jpg';
import FlaggingSMALLJPG from '@sparkpost/matchbox-media/images/Flagging@small.jpg';
import SendingMailSMALLJPG from '@sparkpost/matchbox-media/images/Sending-Mail@small.jpg';
import AnalyticsSMALLJPG from '@sparkpost/matchbox-media/images/Analytics@small.jpg';
import RecipientValidationSMALLJPG from '@sparkpost/matchbox-media/images/Recipient-Validation@small.jpg';
import SignupSMALLJPG from '@sparkpost/matchbox-media/images/Signup@small.jpg';

import AccountsSMALLPNG from '@sparkpost/matchbox-media/images/Accounts@small.png';
import BillingSMALLPNG from '@sparkpost/matchbox-media/images/Billing@small.png';
import ConfigurationSMALLPNG from '@sparkpost/matchbox-media/images/Configuration@small.png';
import EmailTemplateSMALLPNG from '@sparkpost/matchbox-media/images/Email-Template@small.png';
import ErrorSMALLPNG from '@sparkpost/matchbox-media/images/Error@small.png';
import FlaggingSMALLPNG from '@sparkpost/matchbox-media/images/Flagging@small.png';
import SendingMailSMALLPNG from '@sparkpost/matchbox-media/images/Sending-Mail@small.png';
import AnalyticsSMALLPNG from '@sparkpost/matchbox-media/images/Analytics@small.png';
import RecipientValidationSMALLPNG from '@sparkpost/matchbox-media/images/Recipient-Validation@small.png';
import SignupSMALLPNG from '@sparkpost/matchbox-media/images/Signup@small.png';

import AccountsSMALLWEBP from '@sparkpost/matchbox-media/images/Accounts@small.webp';
import BillingSMALLWEBP from '@sparkpost/matchbox-media/images/Billing@small.webp';
import ConfigurationSMALLWEBP from '@sparkpost/matchbox-media/images/Configuration@small.webp';
import EmailTemplateSMALLWEBP from '@sparkpost/matchbox-media/images/Email-Template@small.webp';
import ErrorSMALLWEBP from '@sparkpost/matchbox-media/images/Error@small.webp';
import FlaggingSMALLWEBP from '@sparkpost/matchbox-media/images/Flagging@small.webp';
import SendingMailSMALLWEBP from '@sparkpost/matchbox-media/images/Sending-Mail@small.webp';
import AnalyticsSMALLWEBP from '@sparkpost/matchbox-media/images/Analytics@small.webp';
import RecipientValidationSMALLWEBP from '@sparkpost/matchbox-media/images/Recipient-Validation@small.webp';
import SignupSMALLWEBP from '@sparkpost/matchbox-media/images/Signup@small.webp';

const IMAGES_PNG = {
  Accounts: AccountsPNG,
  Billing: BillingPNG,
  Configuration: ConfigurationPNG,
  EmailTemplate: EmailTemplatePNG,
  Error: ErrorPNG,
  Flagging: FlaggingPNG,
  SendingMail: SendingMailPNG,
  Analytics: AnalyticsPNG,
  RecipientValidation: RecipientValidationPNG,
  Signup: SignupPNG,
};

const IMAGES_WEBP = {
  Accounts: AccountsWEBP,
  Billing: BillingWEBP,
  Configuration: ConfigurationWEBP,
  EmailTemplate: EmailTemplateWEBP,
  Error: ErrorWEBP,
  Flagging: FlaggingWEBP,
  SendingMail: SendingMailWEBP,
  Analytics: AnalyticsWEBP,
  RecipientValidation: RecipientValidationWEBP,
  Signup: SignupWEBP,
};

const IMAGES_JPG = {
  Accounts: AccountsJPG,
  Billing: BillingJPG,
  Configuration: ConfigurationJPG,
  EmailTemplate: EmailTemplateJPG,
  Error: ErrorJPG,
  Flagging: FlaggingJPG,
  SendingMail: SendingMailJPG,
  Analytics: AnalyticsJPG,
  RecipientValidation: RecipientValidationJPG,
  Signup: SignupJPG,
};

const IMAGES_JPG_MEDIUM = {
  Accounts: AccountsMEDIUMJPG,
  Billing: BillingMEDIUMJPG,
  Configuration: ConfigurationMEDIUMJPG,
  EmailTemplate: EmailTemplateMEDIUMJPG,
  Error: ErrorMEDIUMJPG,
  Flagging: FlaggingMEDIUMJPG,
  SendingMail: SendingMailMEDIUMJPG,
  Analytics: AnalyticsMEDIUMJPG,
  RecipientValidation: RecipientValidationMEDIUMJPG,
  Signup: SignupMEDIUMJPG,
};

const IMAGES_PNG_MEDIUM = {
  Accounts: AccountsMEDIUMPNG,
  Billing: BillingMEDIUMPNG,
  Configuration: ConfigurationMEDIUMPNG,
  EmailTemplate: EmailTemplateMEDIUMPNG,
  Error: ErrorMEDIUMPNG,
  Flagging: FlaggingMEDIUMPNG,
  SendingMail: SendingMailMEDIUMPNG,
  Analytics: AnalyticsMEDIUMPNG,
  RecipientValidation: RecipientValidationMEDIUMPNG,
  Signup: SignupMEDIUMPNG,
};

const IMAGES_WEBP_MEDIUM = {
  Accounts: AccountsMEDIUMWEBP,
  Billing: BillingMEDIUMWEBP,
  Configuration: ConfigurationMEDIUMWEBP,
  EmailTemplate: EmailTemplateMEDIUMWEBP,
  Error: ErrorMEDIUMWEBP,
  Flagging: FlaggingMEDIUMWEBP,
  SendingMail: SendingMailMEDIUMWEBP,
  Analytics: AnalyticsMEDIUMWEBP,
  RecipientValidation: RecipientValidationMEDIUMWEBP,
  Signup: SignupMEDIUMWEBP,
};

const IMAGES_JPG_SMALL = {
  Accounts: AccountsSMALLJPG,
  Billing: BillingSMALLJPG,
  Configuration: ConfigurationSMALLJPG,
  EmailTemplate: EmailTemplateSMALLJPG,
  Error: ErrorSMALLJPG,
  Flagging: FlaggingSMALLJPG,
  SendingMail: SendingMailSMALLJPG,
  Analytics: AnalyticsSMALLJPG,
  RecipientValidation: RecipientValidationSMALLJPG,
  Signup: SignupSMALLJPG,
};

const IMAGES_PNG_SMALL = {
  Accounts: AccountsSMALLPNG,
  Billing: BillingSMALLPNG,
  Configuration: ConfigurationSMALLPNG,
  EmailTemplate: EmailTemplateSMALLPNG,
  Error: ErrorSMALLPNG,
  Flagging: FlaggingSMALLPNG,
  SendingMail: SendingMailSMALLPNG,
  Analytics: AnalyticsSMALLPNG,
  RecipientValidation: RecipientValidationSMALLPNG,
  Signup: SignupSMALLPNG,
};

const IMAGES_WEBP_SMALL = {
  Accounts: AccountsSMALLWEBP,
  Billing: BillingSMALLWEBP,
  Configuration: ConfigurationSMALLWEBP,
  EmailTemplate: EmailTemplateSMALLWEBP,
  Error: ErrorSMALLWEBP,
  Flagging: FlaggingSMALLWEBP,
  SendingMail: SendingMailSMALLWEBP,
  Analytics: AnalyticsSMALLWEBP,
  RecipientValidation: RecipientValidationSMALLWEBP,
  Signup: SignupSMALLWEBP,
};

describe('Image Assets', () => {
  add('single image', () => (
    <Picture>
      <Picture.Image src={Image} />
    </Picture>
  ));

  add('all images', () => (
    <>
      <Box mb="800">
        <Text as="h4">JPG - Full Size</Text>
        {Object.keys(IMAGES_JPG).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_JPG[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">PNG - Full Size</Text>
        {Object.keys(IMAGES_PNG).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_PNG[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">WEBP - Full Size</Text>
        {Object.keys(IMAGES_WEBP).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_WEBP[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">JPG - Medium</Text>
        {Object.keys(IMAGES_JPG_MEDIUM).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_JPG_MEDIUM[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">PNG - Medium</Text>
        {Object.keys(IMAGES_PNG_MEDIUM).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_PNG_MEDIUM[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">WEBP - Medium</Text>
        {Object.keys(IMAGES_WEBP_MEDIUM).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_WEBP_MEDIUM[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">JPG - Small</Text>
        {Object.keys(IMAGES_JPG_SMALL).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_JPG_SMALL[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">PNG - Small</Text>
        {Object.keys(IMAGES_PNG_SMALL).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_PNG_SMALL[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
      <Box mb="800">
        <Text as="h4">WEBP - Small</Text>
        {Object.keys(IMAGES_WEBP_SMALL).map(image => {
          return (
            <Box display="inline-block" width="25%" textAlign="center">
              <Picture width="100%">
                <Picture.Image src={IMAGES_WEBP_SMALL[image]} />
              </Picture>
              <Text>{image}</Text>
            </Box>
          );
        })}
      </Box>
    </>
  ));
});
