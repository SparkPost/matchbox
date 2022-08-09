import React from 'react';
import { onKey } from '../../helpers/keyEvents';

import Option from './Option';

type UseOptionConstructor = {
  optionsMarkup?: React.ReactNode;
  focusContainerProps?: {
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  };
};

type UseOptionConstructorProps = {
  options?: React.ReactElement[];
  value?: string | number | readonly string[];
  onSelect?: (value) => void;
  open?: boolean;
  placeholder?: string;
};

function useOptionConstructor(props: UseOptionConstructorProps): UseOptionConstructor {
  const { options, value, onSelect, open, placeholder } = props;
  const [focused, setFocused] = React.useState(
    value ? options.findIndex((option) => option.props.value === value) : 0,
  );
  const [keysSoFar, setKeysSoFar] = React.useState<string>('');
  const [keyClear, setKeyClear] = React.useState<boolean>();

  const optionRefs = React.useRef<HTMLLIElement[]>(new Array(options.length));

  function onFocusContainerKeyDown(e) {
    if (open) {
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

      setKeysSoFar(keysSoFar + e.key.toLowerCase());
      clearKeysSoFarAfterDelay();
    }
  }

  function clearKeysSoFarAfterDelay() {
    const timeout = setTimeout(function () {
      setKeysSoFar('');
      setKeyClear(false);
    }, 700);

    if (keyClear) {
      clearTimeout(timeout);
      setKeyClear(null);
    }

    setKeyClear(true);
  }

  // Preps array of option refs
  React.useEffect(() => {
    optionRefs.current = new Array(options.length);
    return () => {
      optionRefs.current = [];
    };
  }, [options]);

  // Focuses on option when focused index changes
  React.useLayoutEffect(() => {
    if (optionRefs.current[focused]) {
      optionRefs.current[focused].focus();
    }
  }, [focused]);

  React.useLayoutEffect(() => {
    if (keysSoFar && options) {
      const index = options.findIndex((option) => {
        if (typeof option.props.children === 'string') {
          return option.props.children.toLowerCase().startsWith(keysSoFar);
        }
        return -1;
      });
      if (index >= 0) {
        setFocused(index);
      }
    }
  }, [keysSoFar, options]);

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
          ref: (n) => {
            optionRefs.current[i] = n;
          },
        });
      })}
    </>
  );

  return {
    optionsMarkup,
    focusContainerProps: {
      onKeyDown: onFocusContainerKeyDown,
    },
  };
}

export default useOptionConstructor;
