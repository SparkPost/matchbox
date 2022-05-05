import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@sparkpost/matchbox-icons';
import { chevron } from './styles';
import { focusOutline } from '../../styles/helpers';
import { getChild } from '../../helpers/children';
import { Label } from '../Label';
import { ErrorLabel } from '../Error';
import { OptionalLabel } from '../OptionalLabel';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { HelpText } from '../HelpText';
import {
  compose,
  margin,
  MarginProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
} from 'styled-system';
import { pick } from '../../helpers/props';
import { onKeys } from '../../helpers/keyEvents';
import { combineRefs } from '../../helpers/ref';
import useOptionConstructor from './useOptionConstructor';

import { Button, ButtonProps } from '../Button';
import { Box, BoxProps } from '../Box';
import { Popover } from '../Popover';

import Option from './Option';

const system = compose(margin, maxWidth);

const StyledWrapper = styled(Box)`
  ${system}
`;

const StyledChevron = styled(KeyboardArrowDown)<{ $disabled?: boolean }>`
  ${chevron}
`;

type StyledButtonProps = React.ComponentPropsWithRef<'button'> &
  ButtonProps & {
    $hasError?: boolean;
  };

const StyledButton = styled(Button)<StyledButtonProps>`
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes['200']};
  font-weight: ${(props) => props.theme.fontWeights['medium']};
  background: ${(props) => (props.disabled ? props.theme.colors.gray['200'] : '')};
  padding-right: ${(props) => props.theme.space[650]};
  border: ${(props) =>
    props.$hasError ? `1px solid ${props.theme.colors.red[700]}` : `${props.theme.borders[400]}`};
  &:hover {
    background: ${(props) => (props.disabled ? props.theme.colors.gray['200'] : 'transparent')};
  }
  ${focusOutline()}
`;

const ListBoxButton = React.forwardRef<HTMLButtonElement, StyledButtonProps>(function ListBoxButton(
  props,
  userRef,
) {
  return (
    <StyledButton {...props} ref={userRef}>
      {props.children}
    </StyledButton>
  );
});

const StyledList = styled(Box)<BoxProps>`
  ${maxHeight}
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

type ChangeObject = {
  currentTarget?: {
    value?: string | number;
  };
};

export type ListBoxProps = {
  'data-id'?: string;
  'data-sensitive'?: string;
  'data-track'?: string;
  label?: string;
  labelHidden?: boolean;
  helpText?: React.ReactNode;
  error?: string;
  errorInLabel?: boolean;
  optional?: boolean;
  onChange?: (e: ChangeObject) => void;
} & MarginProps &
  MaxWidthProps &
  MaxHeightProps &
  React.ComponentPropsWithRef<'input'>;

const ListBox = React.forwardRef<HTMLInputElement, ListBoxProps>(function ListBox(props, userRef) {
  const {
    children,
    'data-id': dataId,
    'data-sensitive': dataSensitive,
    'data-track': dataTrack,
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
    onFocus,
    onBlur,
    name,
    ...rest
  } = props;

  const systemProps = pick(rest, system.propNames);
  const maxHeightProps = pick(rest, maxHeight.propNames);

  const [open, setOpen] = React.useState<boolean>(false);
  const [currentValue, setCurrentValue] = React.useState<string | number | readonly string[]>(
    value ? value : defaultValue != null ? defaultValue : placeholder,
  );
  const buttonRef = React.useRef<HTMLButtonElement>();

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  // Sets the value for controlled inputs
  React.useEffect(() => {
    // Check if this component is controlled
    if (typeof value !== 'undefined') {
      setCurrentValue(value);
    }
  }, [value]);

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
      // onChange does not work on hidden inputs
      onChange({
        currentTarget: {
          value,
        },
      });
    }

    setOpen(false);
    setCurrentValue(value);

    // Returns focus to the button when closing the popover
    buttonRef.current.focus();

    // Calls user's blur method
    if (onBlur) {
      onBlur(null);
    }
  }

  const contentFromValue = React.useMemo(() => {
    const options = getChild('ListBox.Option', children);
    const activeOption = options.find((option) => {
      return option.props.value === currentValue;
    });
    return activeOption ? activeOption.props.children : currentValue;
  }, [currentValue]);

  const labelMarkup = label && (
    <Label id={`${id}Label`} htmlFor={`${id}LabelButton`} labelHidden={labelHidden}>
      <Box as="span" pr="200">
        {label}
      </Box>
      {error && errorInLabel && (
        <ErrorLabel id={errorId} wrapper="span">
          {error}
        </ErrorLabel>
      )}
      {optional && <OptionalLabel float />}
    </Label>
  );

  const helpMarkup = helpText ? <HelpText id={helpTextId}>{helpText}</HelpText> : null;

  const options = React.useMemo(() => {
    return getChild('ListBox.Option', children);
  }, [children]);

  const { optionsMarkup, focusContainerProps } = useOptionConstructor({
    options,
    value: currentValue,
    onSelect,
    open,
    placeholder,
  });

  // Opens the popover when hitting up or down when focused and closed
  function activatorKeyDown(e) {
    if (!open) {
      onKeys(['arrowDown', 'arrowUp'], () => {
        e.preventDefault();
        togglePopover(e);
      })(e);
    }
  }

  return (
    <StyledWrapper tabIndex={-1} {...systemProps} {...focusContainerProps}>
      {labelMarkup}
      <Popover
        id="listbox-popover"
        p="0"
        onClose={handleClose}
        open={open}
        as="div"
        width="100%"
        minWidth="5rem"
        trigger={
          <Box position="relative">
            <ListBoxButton
              id={`${id}LabelButton`}
              data-id="open-listbox"
              fullWidth
              variant="mutedOutline"
              aria-invalid={!!error}
              aria-haspopup="listbox"
              aria-pressed={open}
              aria-expanded={open}
              onClick={togglePopover}
              onFocus={onFocus}
              onKeyDown={activatorKeyDown}
              disabled={disabled}
              $hasError={!!error}
              {...describedBy}
              ref={combineRefs(buttonRef, userRef)}
            >
              {contentFromValue || placeholder}
            </ListBoxButton>
            <StyledChevron size={24} $disabled={disabled} />
          </Box>
        }
      >
        <StyledList
          as="ul"
          aria-activedescendant={currentValue?.toString()}
          width="100%"
          role="listbox"
          aria-labelledby={id}
          maxHeight="400px"
          {...maxHeightProps}
          overflowY="scroll"
        >
          {optionsMarkup}
        </StyledList>
      </Popover>
      {helpMarkup}
      {error && !errorInLabel && <ErrorLabel id={errorId}>{error}</ErrorLabel>}
      <input
        id={id}
        type="hidden"
        name={name}
        value={currentValue}
        data-id={dataId}
        data-sensitive={dataSensitive}
        data-track={dataTrack}
        required={required}
      />
    </StyledWrapper>
  );
}) as React.ForwardRefExoticComponent<ListBoxProps> & {
  Option: typeof Option;
};

ListBox.displayName = 'ListBox';

ListBox.Option = Option;

export default ListBox;
