import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { buttonFrom } from '../Button';
import { Inline } from '../Inline';
import { linkFrom } from '../UnstyledLink';
import { Stack } from '../Stack';
import { StyledContent, StyledImage } from './styles';

function EmptyState(props) {
  const { title, primaryAction, secondaryAction, image: Image, children } = props;

  const primaryActionMarkup = primaryAction
    ? buttonFrom(primaryAction, {
        size: 'large',
        ...(!primaryAction.color ? { color: 'blue' } : {}),
      })
    : null;

  return (
    <Box position="relative" height="100vh" py={['500', null, '33vh']} px="500">
      <Stack space={['400', null, null, '600']}>
        <Box
          as="h1"
          width={['auto', null, '45%']}
          fontSize={['600', null, null, '700']}
          lineHeight={['600', null, null, '700']}
        >
          {title}
        </Box>
        <StyledContent width={['auto', null, '45%']}>{children}</StyledContent>
        <Box width={['auto', null, '45%']}>
          <Inline space="500">
            {primaryActionMarkup}
            {secondaryAction && <span>{linkFrom(secondaryAction)}</span>}
          </Inline>
        </Box>
      </Stack>
      {Image && (
        <StyledImage
          display={['none', null, 'block']}
          top="45%"
          left="48%"
          width="50%"
          maxWidth="600px"
          height="auto"
          position="absolute"
        >
          <Image />
        </StyledImage>
      )}
    </Box>
  );
}

EmptyState.displayName = 'EmptyState.LEGACY';
EmptyState.propTypes = {
  /**
   * The display title
   */
  title: PropTypes.string,
  /**
   * Main cta. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  primaryAction: PropTypes.shape({
    content: PropTypes.node.isRequired,
  }),
  /**
   * Secondary Action - appear as a link next to the primary action
   */
  secondaryAction: PropTypes.shape({
    content: PropTypes.node.isRequired,
  }),
  /**
   * Image to display
   */
  image: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  /**
   * Content below the CTA
   */
  children: PropTypes.node,
};

export default EmptyState;
