import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Box } from '../Box';
import { Check } from '@sparkpost/matchbox-icons';
import Group from './Group';
import { HelpText } from '../HelpText';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { pick } from '@styled-system/props';
import { omit } from '../../helpers/systemProps';
import { createPropTypes } from '@styled-system/prop-types';
import { margin } from 'styled-system';
import {
  StyledLabel,
  StyledCheck,
  StyledBox,
  StyledInput,
  StyledIndeterminate,
  Wrapper,
} from './styles';

function Checkbox(props) {
  const {
    id,
    checked,
    defaultChecked,
    disabled,
    error,
    helpText,
    label,
    labelHidden,
    onChange,
    onFocus,
    onBlur,
    required,
    value,
    ...rest
  } = props;

  const componentProps = omit(rest, margin.propNames);
  const systemProps = pick(rest);

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const isIndeterminate = checked === 'indeterminate';
  const indeterminateAttributes = isIndeterminate
    ? { indeterminate: 'true', 'aria-checked': 'mixed' }
    : { 'aria-checked': checked, checked };

  return (
    <Wrapper {...systemProps}>
      <StyledLabel error={error} htmlFor={id} disabled={disabled}>
        <StyledInput
          id={id}
          value={value}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type="checkbox"
          required={required}
          error={error}
          {...indeterminateAttributes}
          {...describedBy}
          {...componentProps}
        />
        <Box
          as="span"
          position="relative"
          flex="0"
          display="flex"
          alignItems="center"
          height="1.5rem" // Matches height of Label
        >
          <StyledBox
            as="span"
            display="inline-block"
            borderRadius="200"
            size="1rem"
            lineHeight="200"
            error={error}
            indeterminate={isIndeterminate}
          />
          <StyledCheck position="absolute" width="1rem" height="1rem" as={Check} />
          <StyledIndeterminate
            position="absolute"
            left="100"
            right="100"
            height="2px"
            bg="white"
            borderRadius="200"
            indeterminate={isIndeterminate}
          />
        </Box>
        <Box flex="1" pl="200">
          <Label
            as="span" // Outer wrapper already includes a label
            id={id}
            label={label}
            labelHidden={labelHidden}
            fontWeight="400"
            mb="0" // TODO Remove once margin 0 is baked into Label
          >
            {required && (
              <Box as="span" pr="200" aria-hidden="true">
                *
              </Box>
            )}
          </Label>
        </Box>
      </StyledLabel>
      {error && <Error id={errorId} error={error} ml="500" />}
      {helpText && (
        <HelpText id={helpTextId} ml="500" mt="0">
          {helpText}
        </HelpText>
      )}
    </Wrapper>
  );
}

Checkbox.displayName = 'Checkbox';
Checkbox.Group = Group;
Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.oneOf([true, false, 'indeterminate']),
  /**
   * 'indeterminate' does not work with defaultChecked
   */
  defaultChecked: PropTypes.oneOf([true, false]),
  label: PropTypes.node,
  labelHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  helpText: PropTypes.node,
  ...createPropTypes(margin.propNames),
};

export default Checkbox;
