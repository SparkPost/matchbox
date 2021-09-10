import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import { compose, margin, MarginProps, maxWidth, MaxWidthProps } from 'styled-system';
import { omit } from '@styled-system/props';
import styled from 'styled-components';
import { Label } from '../Label';
import { Error } from '../Error';
import { Connect } from '../Connect';
import { Box, BoxProps } from '../Box';
import { OptionalLabel } from '../OptionalLabel';
import { HelpText } from '../HelpText';
import { roundToBaseline } from '../../helpers/geometry';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import useResizeObserver from '../../hooks/useResizeObserver';
import { pick } from '../../helpers/props';
import { focusOutline } from '../../styles/helpers';

const system = compose(margin, maxWidth);
const StyledWrapper = styled('div')`
  ${system}
`;

const StyledInputWrapper = styled(Box)`
  ${focusOutline({ modifier: '&:focus-within', offset: '2px' })}
`;

const StyledInput = styled(Box)<BoxProps>`
  outline: none;
`;

type FieldBoxProps = BoxProps &
  React.ComponentPropsWithoutRef<'input'> & {
    hasError?: boolean;
  };

const FieldBox = React.forwardRef<HTMLInputElement, FieldBoxProps>(function FieldBox(
  props,
  userRef,
) {
  const { hasError, disabled, height, lineHeight, required, py, ...rest } = props;

  return (
    <StyledInputWrapper>
      <StyledInput
        aria-invalid={!!hasError}
        as="input"
        px="400"
        {...rest}
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
        ref={userRef}
      />
    </StyledInputWrapper>
  );
});

type PrefixOrSuffixProps = BoxProps &
  React.ComponentPropsWithoutRef<'span'> & {
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

type MultiLineProps = React.ComponentPropsWithoutRef<'textarea'> &
  SharedTextFieldProps & {
    multiline: true;
  };

type InputProps = React.ComponentPropsWithoutRef<'input'> &
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
              <Box as={Error} id={errorId} wrapper="span" error={error} fontWeight="400" />
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
        {error && !errorInLabel && <Error id={errorId} error={error} />}
      </StyledWrapper>
    );
  },
);

TextField.displayName = 'TextField';
export default TextField;
