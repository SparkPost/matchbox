import React from 'react';
import { pick, omit } from '../../helpers/props';
import { Close } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Inline } from '../Inline';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import styled from 'styled-components';
import { container, childLinks, statusIcons, dismissBase, dismissColor } from './styles';
import { buttonReset } from '../../styles/helpers';
import { margin, MarginProps } from 'styled-system';
import { getChild, excludeChild } from '../../helpers/children';
import Action from './Action';
import Media from './Media';

type IconProps = {
  status: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'muted';
  size: 'small' | 'large';
};

function IconSection({ status, size }: IconProps) {
  const statusIcon = React.useMemo(() => {
    return status === 'default' ? statusIcons.info : statusIcons[status];
  }, [statusIcons, status]);

  const Icon = statusIcon.iconName;
  const iconSize = '450';
  const fillColor = statusIcon.fill;

  return (
    <Box
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
      width={iconSize}
      height={iconSize}
      color={fillColor}
      mr="300"
      mt={size === 'large' ? '4px' : '2px'}
    >
      <Icon size={size === 'large' ? 24 : 20} label={statusIcon.iconLabel} />
    </Box>
  );
}

type StatusProp = {
  $status?: string;
};

const StyledContainer = styled(Box)<StatusProp>`
  ${container}
  ${margin}
`;

const StyledChildren = styled.div`
  ${childLinks}
`;

const StyledDismiss = styled(Box)<Omit<React.ComponentProps<typeof Box>, 'as'> & StatusProp>`
  ${buttonReset}
  ${dismissBase}
  ${dismissColor}
`;

type ActionProps = React.ComponentProps<typeof Button> & {
  content: string;
};

export type BannerProps = MarginProps & {
  children?: React.ReactNode;
  'data-id'?: string;
  title?: string;
  status?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'muted';
  /**
   * @deprecated Use the Banner.Action component instead
   */
  action?: ActionProps;
  /**
   * @deprecated Use the Banner.Action component instead
   */
  actions?: ActionProps[];

  onDismiss?: (any) => void;
  size?: 'small' | 'large';
  id?: string;
};

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(function Banner(
  props: BannerProps,
  userRef,
) {
  const {
    children,
    'data-id': dataId,
    id,
    title,
    status = 'default',
    action,
    actions,
    onDismiss,
    size = 'large',
    ...rest
  } = props;
  const systemProps = pick(rest, margin.propNames);

  const titleMarkup = title ? (
    <Box mb="200">
      <Text fontSize="400" lineHeight="400" as="h5">
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
    <Box flex={['1', null, '0']} textAlign="right" position="relative">
      <StyledDismiss
        as="button"
        onClick={onDismiss}
        $status={status}
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
      p={size === 'large' ? '450' : '300'}
      py={size === 'large' ? null : '200'}
      borderRadius="100"
      $status={status}
      {...systemProps}
      ref={userRef}
      tabIndex={-1}
      overflow="hidden"
      data-id={dataId}
      id={id}
    >
      {status !== 'muted' && <IconSection status={status} size={size} />}
      <Box flex="1" order={[1, null, 0]} flexBasis={['100%', null, 'auto']}>
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
}) as React.ForwardRefExoticComponent<BannerProps> & {
  Media: typeof Media;
  Action: typeof Action;
};

Banner.displayName = 'Banner';

Banner.Action = Action;
Banner.Media = Media;

export default Banner;
