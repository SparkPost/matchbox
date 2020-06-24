import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPropTypes } from '@styled-system/prop-types';
import { margin, layout, compose } from 'styled-system';
import { groupByValues, filterByVisible } from '../../helpers/array';
import { deprecate } from '../../helpers/propTypes';
import { Box } from '../Box';
import { CheckBox } from '@sparkpost/matchbox-icons';
import { StyledLink, StyledSection } from './styles';

const system = compose(margin, layout);
const Wrapper = styled('div')`
  ${system}
  overflow-y: auto;
`;

function Action(props) {
  const { content, helpText, is = 'link', selected, ...action } = props;

  const linkContent = React.useMemo(() => {
    return (
      <Box as="span" alignItems="flex-start" display="flex">
        <Box as="span" flex="1" fontSize="300" lineHeight="300">
          {content}
        </Box>
        {selected && (
          <Box as="span" color="blue.700">
            <CheckBox size={20} />
          </Box>
        )}
        {helpText && (
          <Box
            as="span"
            color="gray.700"
            fontSize="200"
            lineHeight="200"
            pl="100"
            pt="100"
            textAlign="right"
          >
            {helpText}
          </Box>
        )}
      </Box>
    );
  }, [content, selected, helpText]);

  return (
    <StyledLink
      as={is === 'button' ? 'button' : null}
      type={is === 'button' ? 'button' : null}
      isType={is}
      {...(is === 'checkbox'
        ? { role: 'checkbox', 'aria-checked': !!selected, tabIndex: '0' }
        : {})}
      {...action}
    >
      {linkContent}
    </StyledLink>
  );
}

Action.displayName = 'ActionList.Action';
Action.propTypes = {
  content: PropTypes.node,
  /**
   * Same as hover styles.
   * Can be used for wrappers that manage focus within the menu, eg downshift
   */
  highlighted: PropTypes.bool,
  is: PropTypes.oneOf(['link', 'button', 'checkbox']),
  selected: deprecate(PropTypes.bool, 'Use the checkbox component instead'),
  helpText: PropTypes.string,
};

function Section({ section }) {
  const visibleActions = filterByVisible(section).map((action, i) => (
    <Action key={i} {...action} />
  ));

  if (!visibleActions.length) {
    return null;
  }

  return <StyledSection>{visibleActions}</StyledSection>;
}

Section.displayName = 'ActionList.Section';

function ActionList(props) {
  const {
    actions = [],
    sections = [],
    maxHeight = 'none',
    groupByKey = 'section',
    ...rest
  } = props;

  let list = actions.length ? groupByValues(actions, groupByKey) : [];
  if (sections.length) {
    list = list.concat(sections);
  }

  const listMarkup = list.map((section, index) => <Section section={section} key={index} />);

  return (
    <Wrapper maxHeight={typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight} {...rest}>
      {listMarkup}
    </Wrapper>
  );
}

ActionList.displayName = 'ActionList';
ActionList.propTypes = {
  /**
   * Actions
   * e.g. [{ content: 'action label', onClick: callback() }]
   *
   * Note: each item can include an optional "section" key that will be used to auto group into sections, declaratively
   */
  actions: PropTypes.arrayOf(PropTypes.shape({ content: PropTypes.node.isRequired })),
  /**
   * Creates sections
   * e.g. [[{ content: 'action label', onClick: callback() }]]
   */
  sections: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.shape({ content: PropTypes.node.isRequired })),
  ),

  /**
   * Max height of list
   */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Group by key used to auto group actions into sections, defaults to "section"
   */
  groupByKey: PropTypes.string,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(layout.propNames),
};

export default ActionList;
