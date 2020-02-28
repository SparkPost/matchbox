import React from 'react';
import PropTypes from 'prop-types';
import { createPropTypes } from '@styled-system/prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { Text } from '../Text';
import { Inline } from '../Inline';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import styled from 'styled-components';
import { container, childLinks, statusIcons, dismissBase, dismissColor } from './styles';
import { buttonReset } from '../../styles/helpers';
import { buttonFrom } from '../Button';
import { margin } from 'styled-system';

function IconSection({ status }) {
  const statusIcon = React.useMemo(() => {
    return status === 'default' ? statusIcons.info : statusIcons[status];
  }, [statusIcons, status]);

  const Icon = statusIcon.iconName;

  return (
    <Box
      position="relative"
      display="flex"
      flexShrink="0"
      alignItems="center"
      justifyContent="center"
      width="3rem"
      height="3rem"
      mr="500"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="3rem"
        height="3rem"
        borderRadius="circle"
        bg={statusIcon.bg}
      />
      <Box position="relative" color={statusIcon.fill}>
        <Icon size={30} label={statusIcon.iconLabel} />
      </Box>
    </Box>
  );
}

const StyledContainer = styled(Box)`
  ${container}
  ${margin}
  ${childLinks}
`;

const StyledDismiss = styled(Box)`
  ${buttonReset}
  ${dismissBase}
  ${dismissColor}
`;

function Banner(props) {
  const { children, title, status, action, actions, onDismiss, ...rest } = props;

  const titleMarkup = title ? (
    <Box pt={['300', null, '200']} mb="200">
      <Text fontSize={['400', null, '500']} lineHeight={['400', null, '500']} as="h5">
        {title}
      </Text>
    </Box>
  ) : null;

  const actionMarkup = React.useMemo(() => {
    let result = action ? <div>{buttonFrom(action)}</div> : null;

    if (actions) {
      result = <Inline>{actions.map((action, i) => buttonFrom(action, {}, i))}</Inline>;
    }

    return result;
  }, [action, actions]);

  const dismissMarkup = onDismiss ? (
    <Box flex={['1', null, '0']} textAlign="right">
      <StyledDismiss as="button" onClick={onDismiss} status={status} color="gray.800">
        <ScreenReaderOnly>Dismiss</ScreenReaderOnly>
        <Close size={24} />
      </StyledDismiss>
    </Box>
  ) : null;

  return (
    <StyledContainer
      display="flex"
      flexWrap={['wrap', null, 'nowrap']}
      p="500"
      borderRadius="100"
      status={status}
      {...rest}
    >
      <IconSection status={status} />
      <Box flex="1" order={['1', null, '0']} flexBasis={['100%', null, 'auto']}>
        {titleMarkup}
        <Box mb={actionMarkup ? '500' : '0'}>{children}</Box>
        {actionMarkup}
      </Box>
      {dismissMarkup}
    </StyledContainer>
  );
}

Banner.displayName = 'Banner';
Banner.propTypes = {
  /**
   * The type of banner. 'default' | 'success' | 'warning' | 'danger' | 'info'
   */
  status: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),

  /**
   * The banner's title
   */
  title: PropTypes.string,

  /**
   * Callback when dismiss button is clicked. Button hidden without callback.
   */
  onDismiss: PropTypes.func,

  /**
   * Action that build a button. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  action: PropTypes.shape({ content: PropTypes.string.isRequired }),

  /**
   * List of actions that build buttons. Most button props will work in here.
   * Overrides `action`
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    }),
  ),

  /**
   * Banner Content
   */
  children: PropTypes.node,

  ...createPropTypes(margin.propNames),
};

Banner.defaultProps = {
  status: 'default',
};

export default Banner;
