import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Connect } from '../Connect';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { getRectFor, roundToBaseline } from '../../helpers/geometry';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { tokens } from '@sparkpost/design-tokens';
import { margin } from 'styled-system';
import styled from 'styled-components';
import { pick } from '@styled-system/props';
import { omit } from '../../helpers/systemProps';

const StyledWrapper = styled('div')`
  ${margin}
`;

// TODO Make this reusable and shared with Select
const FieldBox = props => {
  return (
    <Box
      as="input"
      {...props}
      disabled={props.disabled}
      width="100%"
      border={props.hasError ? `1px solid ${tokens.color_red_700}` : '400'}
      borderRadius="100"
      bg={props.disabled ? 'gray.200' : 'white'}
      pl="400"
      pr="600"
      lineHeight="2.5rem"
      height="2.5rem"
      color="gray.900"
      required={props.required}
    />
  );
};

function PrefixOrSuffix({ content, className, forwardedRef, ...rest }) {
  if (!content) {
    return null;
  }

  return (
    <Box
      as="span"
      position="absolute"
      zIndex="1"
      top="0"
      lineHeight="2.5rem"
      height="2.5rem"
      className={className}
      ref={forwardedRef}
      {...rest}
    >
      {content}
    </Box>
  );
}

function TextField(props) {
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
    type,
    suffix,
    suffixClassname,
    style,
    ...rest
  } = props;

  const componentProps = omit(rest, margin.propNames);
  const systemProps = pick(rest);
  const prefixRef = React.useRef(null);
  const suffixRef = React.useRef(null);
  const [prefixPadding, setPrefixPadding] = React.useState('0');
  const [suffixPadding, setSuffixPadding] = React.useState('0');
  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  React.useLayoutEffect(() => {
    if (prefixRef.current) {
      setPrefixPadding(roundToBaseline(getRectFor(prefixRef.current).width));
    }
    if (suffixRef.current) {
      setSuffixPadding(roundToBaseline(getRectFor(suffixRef.current).width));
    }
  }, [prefix, suffix, prefixRef, suffixRef]);

  const inputProps = {
    ...componentProps,
    as: multiline ? 'textarea' : 'input',
    height: multiline ? 'auto' : '2.5rem',
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
      <Label id={id} label={label} labelHidden={labelHidden}>
        {required && (
          <Box as="span" pr="200" aria-hidden="true">
            *
          </Box>
        )}
        {error && errorInLabel && (
          <Box as={Error} id={errorId} wrapper="span" error={error} fontWeight="400" />
        )}
      </Label>
      <Connect left={connectLeft} right={connectRight}>
        <Box position="relative">
          <PrefixOrSuffix
            content={prefix}
            className={prefixClassname}
            forwardedRef={prefixRef}
            left="300"
          />
          <FieldBox {...inputProps} />
          <PrefixOrSuffix
            content={suffix}
            className={suffixClassname}
            forwardedRef={suffixRef}
            right="300"
          />
        </Box>
      </Connect>
      {error && !errorInLabel && <Error id={errorId} error={error} />}
      {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
    </StyledWrapper>
  );
}

TextField.displayName = 'TextField';
TextField.propTypes = {
  /**
   * 'left' | 'center' | 'right'
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  id: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  /**
   * 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date'
   */
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'search', 'tel', 'url', 'date']),
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  /**
   * 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'
   */
  resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical', 'block', 'inline']),
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  helpText: PropTypes.node,
  connectLeft: PropTypes.node,
  connectRight: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
