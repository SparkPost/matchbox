import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import { Box } from '../Box';
import { Error } from '../Error';
import { HelpText } from '../HelpText';
import { Inline } from '../Inline';
import { Label } from '../Label';
import { Tag } from '../Tag';
import { identity, noop } from '../../helpers/event';
import { onKey } from '../../helpers/keyEvents';
import { omit } from '../../helpers/systemProps';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { StyledInput, StyledInputWrapper } from './styles';

const StyledWrapper = styled('div')`
  ${margin}
`;

function ComboBoxTextField(props) {
  const {
    autoFocus,
    disabled,
    delimiter,
    children,
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
    ...rest
  } = props;

  const inputProps = omit(rest, margin.propNames);
  const systemProps = pick(rest);

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

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
      <StyledInputWrapper hasError={!!error} isDisabled={disabled}>
        {selectedItems.length > 0 && (
          <Box display="flex" pl="200" pt="0.375rem">
            <Inline space="100">
              {selectedItems.map((item, i) => {
                return (
                  <span key={i}>
                    <Tag onRemove={!disabled ? () => removeItem(item) : null}>
                      {itemToString(item)}
                    </Tag>
                    {delimiter && i < selectedItems.length - 1 ? (
                      <Box
                        as="span"
                        ml="100"
                        fontWeight="medium"
                        fontStyle="italic"
                        style={{ textTransform: 'uppercase' }}
                      >
                        {delimiter}
                      </Box>
                    ) : null}
                  </span>
                );
              })}
            </Inline>
          </Box>
        )}
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
          type="text"
          value={value}
          {...inputProps}
        />
      </StyledInputWrapper>
      {/* Menu is rendered here so it is positioned correctly before error and helptext */}
      {children}
      {error && !errorInLabel && <Error id={errorId} error={error} />}
      {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
    </StyledWrapper>
  );
}

ComboBoxTextField.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  delimiter: PropTypes.string,
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
  ...createPropTypes(margin.propNames),
};

ComboBoxTextField.defaultProps = {
  selectedItems: [],
  itemToString: identity,
  removeItem: noop,
};

export default ComboBoxTextField;
