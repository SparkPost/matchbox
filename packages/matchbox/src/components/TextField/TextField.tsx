import React, { useRef } from 'react';
import { tokens } from '@sparkpost/design-tokens';
import { compose, margin, MarginProps, maxWidth, MaxWidthProps } from 'styled-system';
import { omit } from '@styled-system/props';
import styled from 'styled-components';
import { Label } from '../Label';
import { ErrorLabel } from '../Error';
import { Connect } from '../Connect';
import { Box, BoxProps } from '../Box';
import { OptionalLabel } from '../OptionalLabel';
import { HelpText } from '../HelpText';
import { KeyboardArrowDown, KeyboardArrowUp } from '@sparkpost/matchbox-icons';
import { roundToBaseline } from '../../helpers/geometry';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import useResizeObserver from '../../hooks/useResizeObserver';
import { pick } from '../../helpers/props';
import { focusOutline, buttonReset } from '../../styles/helpers';
import type { ComponentPropsWithout } from '../../helpers/types';
import { combineRefs } from '../../helpers/ref';

const system = compose(margin, maxWidth);
const StyledWrapper = styled('div')`
  ${system}
`;

const StyledInputWrapper = styled(Box)`
  ${focusOutline({ modifier: '&:focus-within', offset: '2px' })}
`;

const StyledInput = styled(Box)<BoxProps>`
  outline: none;
  &[type='number'],
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;
const StyledButton = styled.button<
  React.ComponentPropsWithRef<'button'> & Omit<React.ComponentProps<typeof Box>, 'as'>
>`
  ${buttonReset}
  cursor: pointer;
`;

const StyledNumberControls = styled(Box)<BoxProps & { $disabled?: boolean }>`
  padding: 0 6px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border-left: ${(props) => props.theme.borders['400']};
  display: flex;
  flex-direction: column;
`;

const StyledArrowUp = styled(KeyboardArrowUp)`
  color: ${(props) => props.theme.colors.blue['700']};
  display: block;
`;

const StyledArrowDown = styled(KeyboardArrowDown)`
  color: ${(props) => props.theme.colors.blue['700']};
  display: block;
`;

type FieldBoxProps = BoxProps &
  React.ComponentPropsWithRef<'input'> & {
    hasError?: boolean;
  };

const FieldBox = React.forwardRef<HTMLInputElement, FieldBoxProps>(function FieldBox(
  props,
  userRef,
) {
  const { hasError, disabled, height, type, lineHeight, required, py, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const increment = () => {
    inputRef.current.stepUp();
  };
  const decrement = () => {
    inputRef.current.stepDown();
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        aria-invalid={!!hasError}
        as="input"
        px="400"
        {...rest}
        type={type}
        disabled={disabled}
        width="100%"
        border={hasError ? `1px solid ${tokens.color_red_700}` : '400'}
        borderRadius="100"
        bg={disabled ? 'gray.200' : 'white'}
        color="gray.900"
        height={height}
        lineHeight={lineHeight}
        py={py}
        required={required}
        ref={combineRefs(inputRef, userRef)}
      />
      {type == 'number' && !disabled && (
        <StyledNumberControls $disabled={disabled}>
          <StyledButton
            onClick={increment}
            as="button"
            type="button"
            aria-hidden={true}
            disabled={disabled}
            tabIndex={-1}
          >
            <StyledArrowUp size={20} />
          </StyledButton>
          <StyledButton
            onClick={decrement}
            as="button"
            type="button"
            aria-hidden={true}
            disabled={disabled}
            tabIndex={-1}
          >
            <StyledArrowDown size={20} />
          </StyledButton>
        </StyledNumberControls>
      )}
    </StyledInputWrapper>
  );
});

type PrefixOrSuffixProps = BoxProps &
  React.ComponentPropsWithRef<'span'> & {
    content?: React.ReactNode;
  };

const PrefixOrSuffix = React.forwardRef<HTMLSpanElement, PrefixOrSuffixProps>(
  function PrefixOrSuffix(props, ref) {
    const { content, className, ...rest } = props;
    if (!content) {
      return null;
    }

    return (
      <Box
        as="span"
        position="absolute"
        zIndex="default"
        top="0"
        lineHeight="2.5rem"
        height="2.5rem"
        className={className}
        ref={ref}
        {...rest}
      >
        {content}
      </Box>
    );
  },
);

type SharedTextFieldProps = {
  id: string; // Required
  align?: 'left' | 'center' | 'right';
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  error?: React.ReactNode;
  errorInLabel?: boolean;
  helpText?: React.ReactNode;
  label?: React.ReactNode;
  labelHidden?: boolean;
  prefix?: React.ReactNode;
  prefixClassname?: string;
  suffix?: React.ReactNode;
  suffixClassname?: string;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';
  type?: string;
  optional?: boolean;
} & MarginProps &
  MaxWidthProps;

// Omitting 'prefix' because it is a native html attribute
type MultiLineProps = ComponentPropsWithout<'textarea', 'prefix'> &
  SharedTextFieldProps & {
    multiline: true;
  };

// Omitting 'prefix' because it is a native html attribute
type InputProps = ComponentPropsWithout<'input', 'prefix'> &
  SharedTextFieldProps & {
    multiline?: false;
  };

export type TextFieldProps = MultiLineProps | InputProps;

const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  function TextField(props, userRef) {
    const {
      align,
      autoFocus,
      connectLeft,
      connectRight,
      disabled,
      error,
      errorInLabel,
      helpText,
      id,
      label,
      labelHidden,
      multiline,
      name,
      onChange,
      onFocus,
      onBlur,
      placeholder,
      prefix,
      prefixClassname,
      readOnly,
      required,
      resize = 'both',
      type = 'text',
      suffix,
      suffixClassname,
      style,
      optional,
      ...rest
    } = props;

    const componentProps = omit(rest);
    const systemProps = pick(rest, system.propNames);
    const [prefixRef, prefixEntry] = useResizeObserver();
    const [suffixRef, suffixEntry] = useResizeObserver();
    const [prefixPadding, setPrefixPadding] = React.useState(0);
    const [suffixPadding, setSuffixPadding] = React.useState(0);
    const { describedBy, errorId, helpTextId } = useInputDescribedBy({
      id,
      hasHelpText: !!helpText,
      hasError: !!error,
    });

    React.useLayoutEffect(() => {
      if (prefix && prefixEntry.contentRect.width) {
        setPrefixPadding(roundToBaseline(prefixEntry.contentRect.width));
      }
    }, [prefix, prefixEntry]);

    React.useLayoutEffect(() => {
      if (suffix && suffixEntry.contentRect.width) {
        setSuffixPadding(roundToBaseline(suffixEntry.contentRect.width));
      }
    }, [suffix, suffixEntry]);

    const inputProps = {
      ...componentProps,
      as: multiline ? 'textarea' : 'input',
      height: multiline ? 'auto' : '2.5rem',
      lineHeight: multiline ? '300' : '2.5rem',
      py: multiline ? '300' : '0',
      hasError: !!error,
      name,
      id,
      type,
      disabled,
      readOnly,
      required,
      autoFocus,
      placeholder,
      onFocus,
      onBlur,
      onChange,
      pl: `calc(${prefixPadding}px + ${tokens.spacing_400})`,
      pr: `calc(${suffixPadding}px + ${tokens.spacing_400})`,
      textAlign: align,
      ...describedBy,
      style: {
        cursor: disabled ? 'not-allowed' : 'auto',
        ...(multiline ? { resize } : {}),
        ...style,
      },
    };

    return (
      <StyledWrapper {...systemProps}>
        {label && (
          <Label id={id} labelHidden={labelHidden}>
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
        )}
        <Connect left={connectLeft} right={connectRight}>
          <Box position="relative">
            <PrefixOrSuffix
              content={prefix}
              className={prefixClassname}
              ref={prefixRef}
              left="300"
            />
            <FieldBox ref={userRef} {...inputProps} />
            <PrefixOrSuffix
              content={suffix}
              className={suffixClassname}
              ref={suffixRef}
              right="300"
            />
          </Box>
        </Connect>
        {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
        {error && !errorInLabel && <ErrorLabel id={errorId}>{error}</ErrorLabel>}
      </StyledWrapper>
    );
  },
);

TextField.displayName = 'TextField';
export default TextField;
