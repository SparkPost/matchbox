import React from 'react';
import { onKey, onKeys } from '../../helpers/keyEvents';

import Option from './Option';

function useOptionConstructor({ options, value, onSelect, open, placeholder }) {
  const [focused, setFocused] = React.useState(
    value ? options.findIndex(option => option.props.value === value) : 0,
  );
  const [keysSoFar, setKeysSoFar] = React.useState('');
  const [keyClear, setKeyClear] = React.useState();

  const focusContainerRef = React.useRef({});
  const optionRefs = React.useRef({ current: new Array(options.length) });

  function onFocusContainerKeyDown(e) {
    e.preventDefault();
    e.stopPropagation();

    onKeys(['arrowDown', 'tab'], () => {
      if (focused === options.length - 1) {
        setFocused(0);
      } else {
        setFocused(focused + 1);
      }
    })(e);

    onKey('arrowUp', () => {
      if (focused === 0) {
        setFocused(options.length - 1);
      } else {
        setFocused(focused - 1);
      }
    })(e);

    onKey('enter', () => {
      onSelect(options[focused].props.value);
    })(e);

    setKeysSoFar(keysSoFar + e.key.toLowerCase());
    clearKeysSoFarAfterDelay();
  }

  function clearKeysSoFarAfterDelay() {
    if (keyClear) {
      clearTimeout(timeout);
      setKeyClear(null);
    }

    setKeyClear(true);

    let timeout = setTimeout(function() {
      setKeysSoFar('');
      setKeyClear(false);
    }, 700);
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
    if (optionRefs.current[focused]) {
      optionRefs.current[focused].focus();
    }
  }, [focused]);

  React.useLayoutEffect(() => {
    if (keysSoFar) {
      const index = options.findIndex(option =>
        option.props.value.toLowerCase().startsWith(keysSoFar),
      );
      if (index >= 0) {
        setFocused(index);
      }
    }
  }, [keysSoFar]);

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
