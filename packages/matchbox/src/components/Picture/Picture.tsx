import React from 'react';
import { layout, LayoutProps, margin, MarginProps, compose } from 'styled-system';
import styled from 'styled-components';
import { pick } from '../../helpers/props';
import { Box } from '../Box';

export type PictureImageProps = {
  alt?: string;
  className?: string;
  src: string;
};

// Picture.Image Component
const Image = React.forwardRef<HTMLImageElement, PictureImageProps>(function Image(props, userRef) {
  const { alt = '', className, src } = props;
  return <Box as="img" alt={alt} className={className} src={src} ref={userRef} width="100%" />;
});

Image.displayName = 'Picture.Image';

export type PictureProps = {
  children?: React.ReactNode; // For passing in child `<source />` elements - may have additional uses in the future, so not restricting that now
  seeThrough?: boolean;
  role?: string;
} & LayoutProps &
  MarginProps;

const system = compose(layout, margin);
const StyledFigure = styled.figure<PictureProps & { $seeThrough?: boolean }>`
  ${system};
  ${({ $seeThrough }) => ($seeThrough ? 'mix-blend-mode: multiply;' : '')};
`;

// Picture Component
const Picture = React.forwardRef<HTMLElement, PictureProps>(function Picture(props, userRef) {
  const { children, seeThrough, role, ...rest } = props;
  const systemProps = pick(rest, system.propNames);
  return (
    <StyledFigure m="0" role={role} ref={userRef} $seeThrough={seeThrough} {...systemProps}>
      <picture>{children}</picture>
    </StyledFigure>
  );
}) as React.ForwardRefExoticComponent<PictureProps> & {
  Image?: typeof Image;
};

Picture.displayName = 'Picture';
Picture.Image = Image;
export default Picture;
