import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { HelpText } from '../HelpText';
import { Tag } from '../Tag';
import { identity, noop } from '../../helpers/event';
import { onKey } from '../../helpers/keyEvents';
// import classnames from 'classnames';
// import styles from './ComboBoxTextField.module.scss';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { margin } from 'styled-system';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

import { Box } from '../Box';
import { Inline } from '../Inline';

const StyledWrapper = styled('div')`
  ${margin}
`;

const inputHeight = '2.5rem';
const StyledInput = styled('input')`
  display: inline-block;
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding-left: ${tokens.spacing_300};
  padding-right: ${tokens.spacing_300};
  line-height: calc(${inputHeight} - 2px);
  height: calc(${inputHeight} - 2px);
  font-weight: ${tokens.fontWeight_normal};
  color: ${tokens.color_gray_900};
`;

// const FieldBox = props => {
//   return (
//     <Box
//       as="input"
//       px="400"
//       {...props}
//       disabled={props.disabled}
//       width="100%"
//       border={props.hasError ? `1px solid ${tokens.color_red_700}` : '400'}
//       borderRadius="100"
//       bg={props.disabled ? 'gray.200' : 'white'}
//       lineHeight="2.5rem"
//       height="2.5rem"
//       color="gray.900"
//       required={props.required}
//     />
//   );
// };

function ComboBoxTextField(props) {
  const {
    autoFocus,
    disabled,
    error,
    errorInLabel,
    helpText,
    id,
    itemToString,
    label,
    labelHidden,
    name,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    removeItem,
    required,
    style,
    selectedItems,
    value,
  } = props;

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const selectedMarkup = React.useMemo(
    () =>
      selectedItems.length ? (
        <Box display="flex" alignItems="center" placeholder="200" pl="200" py="100">
          <Inline space="100">
            {selectedItems.map((item, i) => (
              <Tag key={i} onRemove={!disabled ? () => removeItem(item) : null}>
                {itemToString(item)}
              </Tag>
            ))}
          </Inline>
        </Box>
      ) : null,
    [selectedItems],
  );

  // Auto focuses the input
  // function handleClick() {
  //   inputRef.current.focus();
  // }

  // Removes last item with a backspace and and empty input value
  function handleKeyDown(e) {
    if (!value && selectedItems.length) {
      onKey('backspace', () => {
        removeItem(selectedItems[selectedItems.length - 1]);
      })(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  return (
    <StyledWrapper>
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
      <Box display="flex" flexWrap="wrap" border="400" minHeight={inputHeight}>
        {selectedMarkup}
        <StyledInput
          {...describedBy}
          autoFocus={autoFocus}
          disabled={disabled}
          id={id}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          style={style}
          value={value}
        />
      </Box>
      {error && !errorInLabel && <Error id={errorId} error={error} />}
      {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
    </StyledWrapper>
  );
}

ComboBoxTextField.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  helpText: PropTypes.node,
  id: PropTypes.string.isRequired,
  itemToString: PropTypes.func,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  removeItem: PropTypes.func,
  required: PropTypes.bool,
  selectedItems: PropTypes.array,
};

ComboBoxTextField.defaultProps = {
  selectedItems: [],
  itemToString: identity,
  removeItem: noop,
};

export default ComboBoxTextField;
