import React from 'react';
import PropTypes from 'prop-types';
import { margin, padding, border, width, height, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import Legacy from './legacy/Panel';
import { Box } from '../Box';
import Accent from './Accent';
import Action from './Action';
import Header from './Header';
import Section from './Section';
import { pick } from '../../helpers/systemProps';
import { PanelPaddingContext } from './context';

const systemOuter = compose(margin, width, height);
const systemInner = compose(border, height);

const Panel = React.forwardRef(function Panel(props, userRef) {
  const { accent, children, className, ...rest } = props;

  const outerSystemProps = pick(rest, systemOuter.propNames);
  const innerSystemProps = pick(rest, systemInner.propNames);
  const innerHeight = !!outerSystemProps.height ? '100%' : null;

  // Pick out `p` and `padding` so we only pass one value down
  // `context` is passed to handle directional padding values like `px` or `pr`
  const { p: contextP, padding: contextPadding, ...context } = pick(rest, padding.propNames);

  return (
    <Box {...outerSystemProps} ref={userRef} tabIndex="-1" data-id={props['data-id']}>
      <Box
        border="400"
        borderRadius="100"
        className={className}
        position="relative"
        {...innerSystemProps}
        height={innerHeight}
      >
        {accent && <Accent accentColor={accent} />}
        <PanelPaddingContext.Provider
          value={{ p: contextP || contextPadding || [400, null, 500], ...context }}
        >
          {children}
        </PanelPaddingContext.Provider>
      </Box>
    </Box>
  );
});

Panel.displayName = 'Panel';
Panel.propTypes = {
  accent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['orange', 'blue', 'red', 'yellow', 'green', 'gray']),
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  'data-id': PropTypes.string,
  ...createPropTypes(border.propNames),
  ...createPropTypes(height.propNames),
  ...createPropTypes(margin.propNames),
  ...createPropTypes(padding.propNames),
  ...createPropTypes(width.propNames),
};

Panel.LEGACY = Legacy;
Panel.Header = Header;
Panel.Action = Action;
Panel.Section = Section;

export default Panel;
