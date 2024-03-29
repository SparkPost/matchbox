import React from 'react';
import {
  margin,
  MarginProps,
  padding,
  PaddingProps,
  border,
  BorderProps,
  width,
  WidthProps,
  height,
  HeightProps,
  compose,
} from 'styled-system';
import Legacy from './legacy/Panel';
import { Box } from '../Box';
import Accent from './Accent';
import Action from './Action';
import Header from './Header';
import SubHeader from './SubHeader';
import Section from './Section';
import { pick } from '../../helpers/props';
import { PanelPaddingContext, PanelAppearanceContext } from './context';

const systemOuter = compose(margin, width, height);
const systemInner = compose(border, height);

export type PanelProps = {
  accent?: boolean | 'orange' | 'blue' | 'red' | 'yellow' | 'green' | 'gray';
  appearance?: 'inverted' | 'default';
  'data-id'?: string;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<'div'> &
  MarginProps &
  PaddingProps &
  BorderProps &
  WidthProps &
  HeightProps;

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(function Panel(props, userRef) {
  const { accent, appearance, children, className, ...rest } = props;

  const outerSystemProps = pick(rest, systemOuter.propNames);
  const innerSystemProps = pick(rest, systemInner.propNames);
  const innerHeight = !!outerSystemProps.height ? '100%' : null;

  // Pick out `p` and `padding` so we only pass one value down
  // `context` is passed to handle directional padding values like `px` or `pr`
  const { p: contextP, padding: contextPadding, ...context } = pick(rest, padding.propNames);

  return (
    <Box {...outerSystemProps} ref={userRef} tabIndex={-1} data-id={props['data-id']}>
      <Box
        border="300"
        borderRadius="100"
        className={className}
        position="relative"
        {...innerSystemProps}
        height={innerHeight}
        bg={appearance === 'inverted' ? 'gray.900' : ''}
      >
        {accent && <Accent accentColor={accent} />}
        <PanelPaddingContext.Provider
          value={{ p: contextP || contextPadding || [400, null, 450], ...context }}
        >
          <PanelAppearanceContext.Provider value={appearance}>
            {children}
          </PanelAppearanceContext.Provider>
        </PanelPaddingContext.Provider>
      </Box>
    </Box>
  );
}) as React.ForwardRefExoticComponent<PanelProps> & {
  LEGACY: typeof Legacy;
  Header: typeof Header;
  SubHeader: typeof SubHeader;
  Action: typeof Action;
  Section: typeof Section;
};

Panel.displayName = 'Panel';

Panel.LEGACY = Legacy;
Panel.Header = Header;
Panel.SubHeader = SubHeader;
Panel.Action = Action;
Panel.Section = Section;

export default Panel;
