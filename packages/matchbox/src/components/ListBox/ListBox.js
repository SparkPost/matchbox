import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@sparkpost/matchbox-icons';
import { chevron } from './styles';
import { focusOutline } from '../../styles/helpers';
import { getChild } from '../../helpers/children';
import { Label } from '../Label';
import { Error } from '../Error';
import { OptionalLabel } from '../OptionalLabel';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { HelpText } from '../HelpText';
import { compose, margin, maxWidth, maxHeight } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { omit } from '@styled-system/props';
import { pick } from '../../helpers/systemProps';
import useOptionConstructor from './useOptionConstructor';

import { Button } from '../Button';
import { Box } from '../Box';
import { Popover } from '../Popover';

import Option from './Option';

const system = compose(margin, maxWidth);

const StyledWrapper = styled(Box)`
  ${system}
`;

const StyledChevron = styled(KeyboardArrowDown)`
  ${chevron}
`;

const StyledButton = styled(Button)`
  text-align: left;
  font-size: ${props => props.theme.fontSizes['200']};
  font-weight: ${props => props.theme.fontWeights['medium']};
  background: ${props => (props.disabled ? props.theme.colors.gray['200'] : '')};
  &:hover {
    background: ${props => (props.disabled ? props.theme.colors.gray['200'] : 'transparent')};
  }
  ${focusOutline()}
`;

const ListBoxButton = React.forwardRef(function ListBoxButton(props, userRef) {
  return (
    <StyledButton {...props} ref={userRef}>
      {props.children}
    </StyledButton>
  );
});

const StyledList = styled(Box)`
  ${maxHeight}
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListBox = React.forwardRef(function ListBox(props, userRef) {
  const {
    children,
    placeholder,
    disabled,
    id,
    label,
    labelHidden,
    error,
    errorInLabel,
    required,
    optional,
    helpText,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const systemProps = pick(rest, system.propNames);
  const maxHeightProps = pick(rest, maxHeight.propNames);
  const componentProps = omit(rest);

  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(
    value ? value : defaultValue != null ? defaultValue : placeholder,
  );

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const requiredIndicator = required ? (
    <Box as="span" pr="200" aria-hidden="true">
      *
    </Box>
  ) : null;

  function togglePopover(event) {
    event.stopPropagation();
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  function onSelect(value) {
    if (onChange) {
      // This is a fake event, because buttons do not inherently have a change event
      onChange({
        currentTarget: {
          value,
        },
      });
    }

    setOpen(false);
    setCurrentValue(value);
  }

  const contentFromValue = React.useMemo(() => {
    let options = getChild('ListBox.Option', children);
    let activeOption = options.find(option => {
      return option.props.value === currentValue;
    });

    return activeOption ? activeOption.props.children : currentValue;
  }, [currentValue]);

  const labelMarkup = (
    <Label id={id} label={label} labelHidden={labelHidden}>
      {requiredIndicator}
      {error && errorInLabel && (
        <Box as={Error} id={errorId} wrapper="span" error={error} fontWeight="400" />
      )}
      {optional && <OptionalLabel float />}
    </Label>
  );

  const helpMarkup = helpText ? <HelpText id={helpTextId}>{helpText}</HelpText> : null;

  let options = React.useMemo(() => {
    return getChild('ListBox.Option', children);
  }, [children]);

  const { optionsMarkup, focusContainerProps } = useOptionConstructor({
    options,
    value: currentValue,
    onSelect,
    open,
    placeholder,
  });

  return (
    <StyledWrapper tabIndex="-1" {...systemProps} {...focusContainerProps}>
      {labelMarkup}
      <Popover
        id="listbox-popover"
        p="0"
        onClose={handleClose}
        open={open}
        as="div"
        width="100%"
        trigger={
          <Box position="relative">
            <ListBoxButton
              id={id}
              data-id="open-listbox"
              textAlign="left"
              fullWidth
              variant="mutedOutline"
              aria-haspopup="listbox"
              aria-pressed={open}
              aria-expanded={open}
              aria-labelledby={id}
              onClick={togglePopover}
              disabled={disabled}
              {...componentProps}
              {...describedBy}
              ref={userRef}
            >
              {contentFromValue}
            </ListBoxButton>
            <StyledChevron size={24} disabled={disabled} />
          </Box>
        }
      >
        <StyledList
          as="ul"
          aria-activedescendant={currentValue}
          width="100%"
          role="listbox"
          aria-labelledby={id}
          {...maxHeightProps}
          overflowY="scroll"
        >
          {optionsMarkup}
        </StyledList>
      </Popover>
      {error && !errorInLabel && <Error id={errorId} error={error} />}
      {helpMarkup}
    </StyledWrapper>
  );
});

ListBox.displayName = 'ListBox';
ListBox.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  helpText: PropTypes.node,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...createPropTypes(margin.propNames),
  ...createPropTypes(maxWidth.propNames),
  ...createPropTypes(maxHeight.propNames),
};

ListBox.defaultProps = {
  maxHeight: '400px',
};

ListBox.Option = Option;

export default ListBox;
