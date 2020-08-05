import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronLeft, MoreHoriz } from '@sparkpost/matchbox-icons';
import { ActionList } from '../ActionList';
import { Box } from '../Box';
import { Button } from '../Button';
import { EmptyState } from '../EmptyState';
import { Popover } from '../Popover';
import { UnstyledLink } from '../UnstyledLink';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { filterByVisible } from '../../helpers/array';

const StyledLink = styled(UnstyledLink)`
  text-decoration: none;
`;

function Breadcrumb({ content, ...rest }) {
  return (
    <StyledLink {...rest} fontSize="200" lineHeight="200" fontWeight="medium">
      <Box as="span" display="inline-flex" align-items="center">
        <ChevronLeft size={20} />
        {content}
      </Box>
    </StyledLink>
  );
}

function Subtitle({ subtitle }) {
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

function SecondaryActions({ actions = [], hasPrimaryAction }) {
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
        mr={hasPrimaryAction ? ['0', null, '500'] : ' 0'}
        ml={hasPrimaryAction ? ['300', null, '0'] : '0'}
      >
        {action.content}
      </Button>
    );
  }

  return (
    <Box
      position="relative"
      mr={hasPrimaryAction ? ['0', null, '500'] : ' 0'}
      ml={hasPrimaryAction ? ['300', null, '0'] : '0'}
    >
      <Popover
        bottom
        id="page-secondary-actions"
        left={[false, null, true]}
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
        <ActionList actions={visibleActions} />
      </Popover>
    </Box>
  );
}

function PrimaryAction({ area, action }) {
  if (!action && !area) {
    return null;
  }

  if (area) {
    return <>{area}</>;
  }

  return (
    <Button {...action} color="blue" variant="filled">
      {action.content}
    </Button>
  );
}

function Page(props) {
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
      <EmptyState title={title} primaryAction={primaryAction} {...emptyProps}>
        {content}
      </EmptyState>
    );
  }

  return (
    <div>
      <Box mt={['500', null, '700']} mb={['300', null, '500']}>
        {breadcrumbAction && (
          <Box mb="500">
            <Breadcrumb {...breadcrumbAction} />
          </Box>
        )}
        <Box display={[null, 'block', 'flex']} alignItems="flex-start">
          <Box flex="1">
            {title && (
              <Box
                as="h1"
                fontWeight="medium"
                fontSize={['500', null, '600', '700']}
                lineHeight={['500', null, '600', '700']}
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
            mt={['400', null, '300']}
            mb={['400', null, '0']}
          >
            <SecondaryActions
              actions={secondaryActions}
              hasPrimaryAction={primaryAction || primaryArea}
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
Page.propTypes = {
  /**
   * The Page display title
   */
  title: PropTypes.node,

  /**
   * Subtitle that appears to the right of the title
   */
  subtitle: PropTypes.node,

  /**
   * Main cta. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  primaryAction: PropTypes.shape({
    content: PropTypes.node.isRequired,
  }),

  /**
   * Alternative to primaryAction, accepts React nodes
   */
  primaryArea: PropTypes.node,

  /**
   * Actions that appear in an Actionlist
   * e.g. { content: 'button label', onClick: callback() }
   */
  secondaryActions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ),

  /**
   * The back link action
   */
  breadcrumbAction: PropTypes.shape({
    content: PropTypes.node.isRequired,
  }),

  /**
   * Optional empty state object
   */
  empty: PropTypes.shape({
    show: PropTypes.bool,
    content: PropTypes.node,
  }),

  /**
   * Page Children
   */
  children: PropTypes.node,
};

export default Page;
