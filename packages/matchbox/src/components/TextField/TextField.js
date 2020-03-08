import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Connect } from '../Connect';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { getRectFor, roundToBaseline } from '../../helpers/geometry';
import { tokens } from '@sparkpost/design-tokens';

const FieldBox = props => {
  return (
    <Box
      as="input"
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
      {...props}
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
    resize,
    type,
    suffix,
    suffixClassname,
    style,
    ...rest
  } = props;

  const prefixRef = React.useRef(null);
  const suffixRef = React.useRef(null);
  const [prefixPadding, setPrefixPadding] = React.useState('400');
  const [suffixPadding, setSuffixPadding] = React.useState('400');

  React.useLayoutEffect(() => {
    if (prefixRef.current) {
      setPrefixPadding(roundToBaseline(getRectFor(prefixRef.current).width + 16));
    }
    if (suffixRef.current) {
      setSuffixPadding(roundToBaseline(getRectFor(suffixRef.current).width + 16));
    }
  }, [prefix, suffix, prefixRef, suffixRef]);

  const helpMarkup = helpText ? (
    <HelpText id={id ? `${id}-helptext` : null}>{helpText}</HelpText>
  ) : null;

  const requiredIndicator = required ? (
    <Box as="span" pr="200" aria-hidden="true">
      *
    </Box>
  ) : null;

  const labelMarkup = (
    <Label id={id} label={label} labelHidden={labelHidden}>
      {requiredIndicator}
      {error && errorInLabel && (
        <Box
          as={Error}
          id={id ? `${id}-error` : null}
          wrapper="span"
          error={error}
          fontWeight="400"
        />
      )}
    </Label>
  );

  const inputProps = {
    ...rest,
    as: multiline ? 'textarea' : 'input',
    height: multiline ? 'auto' : '2.5rem',
    name,
    id,
    type,
    disabled,
    readOnly,
    autoFocus,
    placeholder,
    onFocus,
    onBlur,
    onChange,
    pl: prefixPadding,
    pr: suffixPadding,
    textAlign: align,
    style: {
      resize,
      ...style,
    },
  };

  return (
    <Box>
      {labelMarkup}
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

      {error && !errorInLabel && <Error id={id ? `${id}-error` : null} error={error} />}
      {helpMarkup}
    </Box>
  );
}

TextField.displayName = 'TextField';
TextField.propTypes = {
  /**
   * 'left' | 'center' | 'right'
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  id: PropTypes.string,
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
  resize: 'both',
  type: 'text',
};

// class TextField extends Component {

//     const input = React.createElement(multiline ? 'textarea' : 'input', {
//       ...rest,
//       name,
//       id,
//       type,
//       disabled,
//       readOnly,
//       autoFocus,
//       placeholder,
//       onFocus,
//       onBlur,
//       onChange,
//       className: setInputClasses,
//       style: {
//         textAlign: align,
//         paddingLeft,
//         paddingRight,
//         resize,
//         ...style
//       }
//     });

//     const inputMarkup = prefix || suffix
//       ? <div className={styles.InputWrapper}>
//         {prefixMarkup}
//         {input}
//         {suffixMarkup}
//       </div>
//       : input;

//     return (
//       <fieldset className={styles.TextField}>
//         {label && !labelHidden && labelMarkup}
//         <Connect left={connectLeft} right={connectRight}>
//           {inputMarkup}
//         </Connect>
//         {error && !errorInLabel && <Error error={error} />}
//         {helpMarkup}
//       </fieldset>
//     );
//   }
// }

export default TextField;
