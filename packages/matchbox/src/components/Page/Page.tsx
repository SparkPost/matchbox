import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, MoreHoriz } from '@sparkpost/matchbox-icons';
import { ActionList } from '../ActionList';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { EmptyState } from '../EmptyState';
import { Popover } from '../Popover';
import { UnstyledLink, UnstyledLinkProps } from '../UnstyledLink';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { filterByVisible } from '../../helpers/array';

type ButtonActionProps = {
  content?: React.ReactNode;
  visible?: boolean;
};

type PageAction = ButtonProps & ButtonActionProps;

const StyledLink = styled(UnstyledLink)`
  text-decoration: none;
`;

type PageBreadcrumbProps = UnstyledLinkProps & {
  content?: React.ReactNode;
};

function Breadcrumb({ content, ...rest }: PageBreadcrumbProps): JSX.Element {
  return (
    <StyledLink {...rest} fontSize="200" lineHeight="200" fontWeight="medium">
      <Box as="span" display="inline-flex" alignItems="center">
        <ChevronLeft size="20" />
        {content}
      </Box>
    </StyledLink>
  );
}

type PageSubtitleProps = {
  subtitle?: React.ReactNode;
};

function Subtitle({ subtitle }: PageSubtitleProps): JSX.Element {
  if (!subtitle) {
    return null;
  }

  if (typeof subtitle === 'string') {
    return (
      <Box
        as="h2"
        fontSize={['300', null, null, '500']}
        lineHeight={['300', null, null, '500']}
        fontWeight="normal"
      >
        {subtitle}
      </Box>
    );
  }

  return <div>{subtitle}</div>;
}

type PageSecondaryActionsProps = {
  hasPrimaryAction?: boolean;
  actions?: PageAction[];
};

function SecondaryActions({ actions, hasPrimaryAction }: PageSecondaryActionsProps): JSX.Element {
  const visibleActions = React.useMemo(() => filterByVisible(actions), [actions]);
  const [isOpen, setIsOpen] = React.useState(false);

  if (!visibleActions.length) {
    return null;
  }

  if (visibleActions.length === 1) {
    const action = visibleActions[0];

    return (
      <Button
        {...action}
        variant="outline"
        color="blue"
        mr={hasPrimaryAction ? ['0', null, '300'] : ' 0'}
        ml={hasPrimaryAction ? ['300', null, '0'] : '0'}
      >
        {action.content}
      </Button>
    );
  }

  return (
    <Box
      position="relative"
      mr={hasPrimaryAction ? ['0', null, '300'] : ' 0'}
      ml={hasPrimaryAction ? ['300', null, '0'] : '0'}
    >
      <Popover
        id="page-secondary-actions"
        position={['bottomRight', null, 'bottomLeft']}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        trigger={
          <Button
            aria-controls="page-secondary-actions"
            aria-expanded={isOpen}
            color="blue"
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            p="0"
            width="2.5rem" // Forces a square
          >
            <MoreHoriz />
            <ScreenReaderOnly>More Options</ScreenReaderOnly>
          </Button>
        }
      >
        <ActionList>
          {visibleActions.map((action, i) => (
            <ActionList.Action key={i} {...action} />
          ))}
        </ActionList>
      </Popover>
    </Box>
  );
}

type PagePrimaryActionProps = {
  area?: React.ReactNode;
  action?: PageAction;
};

function PrimaryAction({ area, action }: PagePrimaryActionProps): JSX.Element {
  if (!action && !area) {
    return null;
  }

  if (area) {
    return <>{area}</>;
  }

  return (
    <Button color="blue" variant="filled" {...action}>
      {action.content}
    </Button>
  );
}

export type PageProps = {
  /**
   * The Page display title
   */
  title?: React.ReactNode;
  /**
   * Subtitle that appears next to the title
   */
  subtitle?: React.ReactNode;
  /**
   * Main cta. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  primaryAction?: PageAction;
  /**
   * Alternative to primaryAction
   */
  primaryArea?: React.ReactNode;
  /**
   * Actions that appear in an Actionlist
   * e.g. { content: 'button label', onClick: callback() }
   */
  secondaryActions?: PageAction[];
  /**
   * The back link action
   */
  breadcrumbAction?: PageBreadcrumbProps;
  /**
   * Optional empty state object
   * @deprecated Use EmptyState instead
   */
  empty?: {
    show?: boolean;
    content?: React.ReactNode;
    [k: string]: any;
  };
  /**
   * Page Children
   */
  children?: React.ReactNode;
};

function Page(props: PageProps): JSX.Element {
  const {
    title,
    subtitle,
    primaryAction,
    primaryArea,
    secondaryActions,
    breadcrumbAction,
    empty = {},
    children,
  } = props;
  const { show, content, ...emptyProps } = empty;

  if (show) {
    return (
      // @ts-ignore
      <EmptyState.LEGACY title={title} primaryAction={primaryAction} {...emptyProps}>
        {content}
        {/* @ts-ignore */}
      </EmptyState.LEGACY>
    );
  }

  return (
    <div>
      <Box mt={['500', null, '700']} mb={['300', null, '450']}>
        {breadcrumbAction && (
          <Box mb="600">
            <Breadcrumb {...breadcrumbAction} />
          </Box>
        )}
        <Box display={[null, 'block', 'flex']} alignItems="center">
          <Box flex="1">
            {title && (
              <Box
                as="h1"
                fontWeight="semibold"
                fontSize={['500', null, '600']}
                lineHeight={['500', null, '600']}
              >
                {title}
              </Box>
            )}
            <Subtitle subtitle={subtitle} />
          </Box>
          <Box
            flex="0"
            display="flex"
            flexDirection={['row-reverse', null, 'row']}
            justifyContent="flex-end"
            mt={['400', null, '0']}
            mb={['400', null, '0']}
          >
            <SecondaryActions
              actions={secondaryActions}
              hasPrimaryAction={!!primaryAction || !!primaryArea}
            />
            <PrimaryAction area={primaryArea} action={primaryAction} />
          </Box>
        </Box>
      </Box>
      {children}
    </div>
  );
}

Page.displayName = 'Page';
export default Page;
