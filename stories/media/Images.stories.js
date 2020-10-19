import React from 'react';
import { Box, Text } from '@sparkpost/matchbox';
import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';

const IMAGES_JPG = {
  'Accounts.jpg': require('@sparkpost/matchbox-media/images/Accounts.jpg'),
  'Billing.jpg': require('@sparkpost/matchbox-media/images/Billing.jpg'),
  'Configuration.jpg': require('@sparkpost/matchbox-media/images/Configuration.jpg'),
  'Email-Template.jpg': require('@sparkpost/matchbox-media/images/Email-Template.jpg'),
  'Error.jpg': require('@sparkpost/matchbox-media/images/Error.jpg'),
  'Flagging.jpg': require('@sparkpost/matchbox-media/images/Flagging.jpg'),
  'Sending-Mail.jpg': require('@sparkpost/matchbox-media/images/Sending-Mail.jpg'),
  'Analytics.jpg': require('@sparkpost/matchbox-media/images/Analytics.jpg'),
  'Recipient-Validation.jpg': require('@sparkpost/matchbox-media/images/Recipient-Validation.jpg'),
  'Signup.jpg': require('@sparkpost/matchbox-media/images/Signup.jpg'),
};

const IMAGES_PNG = {
  'Accounts.png': require('@sparkpost/matchbox-media/images/Accounts.png'),
  'Billing.png': require('@sparkpost/matchbox-media/images/Billing.png'),
  'Configuration.png': require('@sparkpost/matchbox-media/images/Configuration.png'),
  'Email-Template.png': require('@sparkpost/matchbox-media/images/Email-Template.png'),
  'Error.png': require('@sparkpost/matchbox-media/images/Error.png'),
  'Flagging.png': require('@sparkpost/matchbox-media/images/Flagging.png'),
  'Sending-Mail.png': require('@sparkpost/matchbox-media/images/Sending-Mail.png'),
  'Analytics.png': require('@sparkpost/matchbox-media/images/Analytics.png'),
  'Recipient-Validation.png': require('@sparkpost/matchbox-media/images/Recipient-Validation.png'),
  'Signup.png': require('@sparkpost/matchbox-media/images/Signup.jpg'),
};

const IMAGES_WEBP = {
  'Accounts.webp': require('@sparkpost/matchbox-media/images/Accounts.webp'),
  'Billing.webp': require('@sparkpost/matchbox-media/images/Billing.webp'),
  'Configuration.webp': require('@sparkpost/matchbox-media/images/Configuration.webp'),
  'Email-Template.webp': require('@sparkpost/matchbox-media/images/Email-Template.webp'),
  'Error.webp': require('@sparkpost/matchbox-media/images/Error.webp'),
  'Flagging.webp': require('@sparkpost/matchbox-media/images/Flagging.webp'),
  'Sending-Mail.webp': require('@sparkpost/matchbox-media/images/Sending-Mail.webp'),
  'Analytics.webp': require('@sparkpost/matchbox-media/images/Analytics.webp'),
  'Recipient-Validation.webp': require('@sparkpost/matchbox-media/images/Recipient-Validation.webp'),
  'Signup.webp': require('@sparkpost/matchbox-media/images/Signup.webp'),
};

const IMAGES_JPG_MEDIUM = {
  'Accounts@medium.jpg': require('@sparkpost/matchbox-media/images/Accounts@medium.jpg'),
  'Billing@medium.jpg': require('@sparkpost/matchbox-media/images/Billing@medium.jpg'),
  'Configuration@medium.jpg': require('@sparkpost/matchbox-media/images/Configuration@medium.jpg'),
  'Email-Template@medium.jpg': require('@sparkpost/matchbox-media/images/Email-Template@medium.jpg'),
  'Error@medium.jpg': require('@sparkpost/matchbox-media/images/Error@medium.jpg'),
  'Flagging@medium.jpg': require('@sparkpost/matchbox-media/images/Flagging@medium.jpg'),
  'Sending-Mail@medium.jpg': require('@sparkpost/matchbox-media/images/Sending-Mail@medium.jpg'),
  'Analytics@medium.jpg': require('@sparkpost/matchbox-media/images/Analytics@medium.jpg'),
  'Recipient-Validation@medium.jpg': require('@sparkpost/matchbox-media/images/Recipient-Validation@medium.jpg'),
  'Signup@medium.jpg': require('@sparkpost/matchbox-media/images/Signup@medium.jpg'),
};

const IMAGES_PNG_MEDIUM = {
  'Accounts@medium.png': require('@sparkpost/matchbox-media/images/Accounts@medium.png'),
  'Billing@medium.png': require('@sparkpost/matchbox-media/images/Billing@medium.png'),
  'Configuration@medium.png': require('@sparkpost/matchbox-media/images/Configuration@medium.png'),
  'Email-Template@medium.png': require('@sparkpost/matchbox-media/images/Email-Template@medium.png'),
  'Error@medium.png': require('@sparkpost/matchbox-media/images/Error@medium.png'),
  'Flagging@medium.png': require('@sparkpost/matchbox-media/images/Flagging@medium.png'),
  'Sending-Mail@medium.png': require('@sparkpost/matchbox-media/images/Sending-Mail@medium.png'),
  'Analytics@medium.png': require('@sparkpost/matchbox-media/images/Analytics@medium.png'),
  'Recipient-Validation@medium.png': require('@sparkpost/matchbox-media/images/Recipient-Validation@medium.png'),
  'Signup@medium.png': require('@sparkpost/matchbox-media/images/Signup@medium.png'),
};

const IMAGES_WEBP_MEDIUM = {
  'Accounts@medium.webp': require('@sparkpost/matchbox-media/images/Accounts@medium.webp'),
  'Billing@medium.webp': require('@sparkpost/matchbox-media/images/Billing@medium.webp'),
  'Configuration@medium.webp': require('@sparkpost/matchbox-media/images/Configuration@medium.webp'),
  'Email-Template@medium.webp': require('@sparkpost/matchbox-media/images/Email-Template@medium.webp'),
  'Error@medium.webp': require('@sparkpost/matchbox-media/images/Error@medium.webp'),
  'Flagging@medium.webp': require('@sparkpost/matchbox-media/images/Flagging@medium.webp'),
  'Sending-Mail@medium.webp': require('@sparkpost/matchbox-media/images/Sending-Mail@medium.webp'),
  'Analytics@medium.webp': require('@sparkpost/matchbox-media/images/Analytics@medium.webp'),
  'Recipient-Validation@medium.webp': require('@sparkpost/matchbox-media/images/Recipient-Validation@medium.webp'),
  'Signup@medium.webp': require('@sparkpost/matchbox-media/images/Signup@medium.webp'),
};

const IMAGES_JPG_SMALL = {
  'Accounts@small.jpg': require('@sparkpost/matchbox-media/images/Accounts@small.jpg'),
  'Billing@small.jpg': require('@sparkpost/matchbox-media/images/Billing@small.jpg'),
  'Configuration@small.jpg': require('@sparkpost/matchbox-media/images/Configuration@small.jpg'),
  'Email-Template@small.jpg': require('@sparkpost/matchbox-media/images/Email-Template@small.jpg'),
  'Error@small.jpg': require('@sparkpost/matchbox-media/images/Error@small.jpg'),
  'Flagging@small.jpg': require('@sparkpost/matchbox-media/images/Flagging@small.jpg'),
  'Sending-Mail@small.jpg': require('@sparkpost/matchbox-media/images/Sending-Mail@small.jpg'),
  'Analytics@small.jpg': require('@sparkpost/matchbox-media/images/Analytics@small.jpg'),
  'Recipient-Validation@small.jpg': require('@sparkpost/matchbox-media/images/Recipient-Validation@small.jpg'),
  'Signup@small.jpg': require('@sparkpost/matchbox-media/images/Signup@small.jpg'),
};

const IMAGES_PNG_SMALL = {
  'Accounts@small.png': require('@sparkpost/matchbox-media/images/Accounts@small.png'),
  'Billing@small.png': require('@sparkpost/matchbox-media/images/Billing@small.png'),
  'Configuration@small.png': require('@sparkpost/matchbox-media/images/Configuration@small.png'),
  'Email-Template@small.png': require('@sparkpost/matchbox-media/images/Email-Template@small.png'),
  'Error@small.png': require('@sparkpost/matchbox-media/images/Error@small.png'),
  'Flagging@small.png': require('@sparkpost/matchbox-media/images/Flagging@small.png'),
  'Sending-Mail@small.png': require('@sparkpost/matchbox-media/images/Sending-Mail@small.png'),
  'Analytics@small.png': require('@sparkpost/matchbox-media/images/Analytics@small.png'),
  'Recipient-Validation@small.png': require('@sparkpost/matchbox-media/images/Recipient-Validation@small.png'),
  'Signup@small.png': require('@sparkpost/matchbox-media/images/Signup@small.png'),
};

const IMAGES_WEBP_SMALL = {
  'Accounts@small.webp': require('@sparkpost/matchbox-media/images/Accounts@small.webp'),
  'Billing@small.webp': require('@sparkpost/matchbox-media/images/Billing@small.webp'),
  'Configuration@small.webp': require('@sparkpost/matchbox-media/images/Configuration@small.webp'),
  'Email-Template@small.webp': require('@sparkpost/matchbox-media/images/Email-Template@small.webp'),
  'Error@small.webp': require('@sparkpost/matchbox-media/images/Error@small.webp'),
  'Flagging@small.webp': require('@sparkpost/matchbox-media/images/Flagging@small.webp'),
  'Sending-Mail@small.webp': require('@sparkpost/matchbox-media/images/Sending-Mail@small.webp'),
  'Analytics@small.webp': require('@sparkpost/matchbox-media/images/Analytics@small.webp'),
  'Recipient-Validation@small.webp': require('@sparkpost/matchbox-media/images/Recipient-Validation@small.webp'),
  'Signup@small.webp': require('@sparkpost/matchbox-media/images/Signup@small.webp'),
};

export default {
  title: 'Media/Images',
};

export const SingleImage = () => <Box as="img" width="800px" src={Image} />;

export const AllImages = () => (
  <>
    <Box mb="800">
      <Text as="h4">JPG - Full Size</Text>
      {Object.keys(IMAGES_JPG).map(image => {
        return (
          <Box display="inline-block" width="25%" textAlign="center">
            <Box title={image} as="img" width="100%" src={IMAGES_JPG[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_PNG[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_WEBP[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_JPG_MEDIUM[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_PNG_MEDIUM[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_WEBP_MEDIUM[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_JPG_SMALL[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_PNG_SMALL[image]} />
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
            <Box title={image} as="img" width="100%" src={IMAGES_WEBP_SMALL[image]} />
            <Text>{image}</Text>
          </Box>
        );
      })}
    </Box>
  </>
);
