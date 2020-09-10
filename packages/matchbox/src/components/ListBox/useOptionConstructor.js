import React from 'react';
import { onKey } from '../../helpers/keyEvents';

import Option from './Option';

function useOptionConstructor({ options, value, onSelect, open, placeholder }) {
  const [focused, setFocused] = React.useState(
    value ? options.findIndex(option => option.props.value === value) : 0,
  );
  const focusContainerRef = React.useRef({});
  const optionRefs = React.useRef({ current: new Array(options.length) });

  function onFocusContainerKeyDown(e) {
    onKey('arrowDown', () => {
      e.preventDefault();
      if (focused === options.length - 1) {
        setFocused(0);
      } else {
        setFocused(focused + 1);
      }
    })(e);

    onKey('arrowUp', () => {
      e.preventDefault();
      if (focused === 0) {
        setFocused(options.length - 1);
      } else {
        setFocused(focused - 1);
      }
    })(e);
  }

  // Preps array of option refs
  React.useEffect(() => {
    optionRefs.current = new Array(options.length);
    return () => {
      optionRefs.current = [];
    };
  }, [options]);

  React.useEffect(() => {
    if (!open && value) {
      setFocused(options.findIndex(option => option.props.value === value));
    }
  }, [open, value]);

  // Focuses on option when focused index changes
  React.useLayoutEffect(() => {
    // Does not continue when focus is reset, when moving focus outside the container
    if (focusContainerRef.current && !focusContainerRef.current.contains(document.activeElement)) {
      return;
    }

    if (optionRefs.current[focused]) {
      optionRefs.current[focused].focus();
    }
  }, [focused]);

  const optionsMarkup = (
    <>
      {placeholder && (
        <Option disabled value="">
          {placeholder}
        </Option>
      )}
      {options.map((option, i) => {
        return React.cloneElement(option, {
          selected: value,
          setSize: options.length,
          onSelect,
          ref: n => {
            optionRefs.current[i] = n;
          },
        });
      })}
    </>
  );

  return {
    optionsMarkup,
    focusContainerProps: {
      ref: focusContainerRef,
      onKeyDown: onFocusContainerKeyDown,
    },
  };
}

export default useOptionConstructor;
