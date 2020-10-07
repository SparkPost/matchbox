import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import { omit } from '../../helpers/systemProps';
import { createPropTypes } from '@styled-system/prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { Text } from '../Text';
import { Inline } from '../Inline';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import styled from 'styled-components';
import { container, childLinks, statusIcons, dismissBase, dismissColor } from './styles';
import { buttonReset } from '../../styles/helpers';
import { margin } from 'styled-system';
import { getChild, excludeChild } from '../../helpers/children';
import Action from './Action';
import Media from './Media';

function IconSection({ status, size }) {
  const statusIcon = React.useMemo(() => {
    return status === 'default' ? statusIcons.info : statusIcons[status];
  }, [statusIcons, status]);

  const Icon = statusIcon.iconName;

  const iconSize = size === 'large' ? '3rem' : '1rem';
  const bgColor = size === 'large' ? statusIcon.bg : null;
  const fillColor = size === 'large' ? statusIcon.fill : statusIcon.fillMobile;
  const iconMargin = size === 'large' ? '500' : '300';

  return (
    <Box
      position="relative"
      display="flex"
      flexShrink="0"
      alignItems="center"
      justifyContent="center"
      width={iconSize}
      height={iconSize}
      mr={iconMargin}
      mt={size === 'large' ? null : '2px'}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width={iconSize}
        height={iconSize}
        borderRadius="circle"
        bg={bgColor}
      />
      <Box position="relative" color={fillColor}>
        <Icon size={size === 'large' ? 30 : 20} label={statusIcon.iconLabel} />
      </Box>
    </Box>
  );
}

const StyledContainer = styled(Box)`
  ${container}
  ${margin}
`;

const StyledChildren = styled('div')`
  ${childLinks}
`;

const StyledDismiss = styled(Box)`
  ${buttonReset}
  ${dismissBase}
  ${dismissColor}
`;

const Banner = React.forwardRef(function Banner(props, ref) {
  const { children, title, status, action, actions, onDismiss, size, ...rest } = props;

  const titleMarkup = title ? (
    <Box pt={['300', null, '200']} mb="200">
      <Text fontSize={['400', null, '500']} lineHeight={['400', null, '500']} as="h5">
        {title}
      </Text>
    </Box>
  ) : null;

  const actionMarkup = React.useMemo(() => {
    let result = action ? <Action {...omit(action, ['content'])}>{action.content}</Action> : null;

    if (actions) {
      result = (
        <Inline>
          {actions.map((action, i) => (
            <Action key={i} mr="0" {...omit(action, ['content'])}>
              {action.content}
            </Action>
          ))}
        </Inline>
      );
    }

    return result;
  }, [action, actions]);

  const dismissMarkup = onDismiss ? (
    <Box flex={['1', null, '0']} textAlign="right">
      <StyledDismiss
        as="button"
        onClick={onDismiss}
        status={status}
        color="gray.800"
        type="button"
        p={size === 'large' ? '100' : 0}
      >
        <ScreenReaderOnly>Dismiss</ScreenReaderOnly>
        <Close size={size === 'large' ? 24 : 20} />
      </StyledDismiss>
    </Box>
  ) : null;

  const hasMedia = React.useMemo(() => {
    return getChild('Banner.Media', children);
  }, [children]);

  const mediaMarkup =
    hasMedia && hasMedia.length ? (
      <Box
        width="100%"
        maxWidth="600px"
        pl="200"
        display={['none', null, 'block']}
        position="relative"
      >
        {getChild('Banner.Media', children)}
      </Box>
    ) : null;

  return (
    <StyledContainer
      display="flex"
      flexWrap={['wrap', null, 'nowrap']}
      p={size === 'large' ? '500' : '300'}
      py={size === 'large' ? null : '200'}
      borderRadius="100"
      status={status}
      {...rest}
      ref={ref}
      tabIndex="-1"
    >
      {status !== 'muted' && <IconSection status={status} size={size} />}
      <Box flex="1" order={['1', null, '0']} flexBasis={['100%', null, 'auto']}>
        {titleMarkup}
        <Box>
          <StyledChildren>{excludeChild('Banner.Media', children)}</StyledChildren>
        </Box>
        {actionMarkup}
      </Box>
      {mediaMarkup}
      {dismissMarkup}
    </StyledContainer>
  );
});

Banner.displayName = 'Banner';
Banner.propTypes = {
  /**
   * The type of banner. 'default' | 'success' | 'warning' | 'danger' | 'info'
   */
  status: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info', 'muted']),

  /**
   * The banner's title
   */
  title: PropTypes.string,

  /**
   * Callback when dismiss button is clicked. Button hidden without callback.
   */
  onDismiss: PropTypes.func,

  /**
   * Deprecated in favor of `Banner.Action`
   * Action that build a button. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  action: deprecate(
    PropTypes.shape({ content: PropTypes.string.isRequired }),
    'Use `Banner.Action` instead',
  ),

  /**
   * Deprecated in favor of `Banner.Action`
   * List of actions that build buttons. Most button props will work in here.
   * Overrides `action`
   */
  actions: deprecate(
    PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
      }),
    ),
    'Use `Banner.Action` instead',
  ),

  /**
   * Banner Content
   */
  children: PropTypes.node,

  /**
   * Banner size
   */
  size: PropTypes.oneOf(['small', 'large']),

  ...createPropTypes(margin.propNames),
};

Banner.defaultProps = {
  status: 'default',
  size: 'large',
};

Banner.Action = Action;
Banner.Media = Media;

export default Banner;
