import React from 'react';

type EventKeys =
  | 'backspace'
  | 'enter'
  | 'escape'
  | 'arrowRight'
  | 'arrowLeft'
  | 'arrowUp'
  | 'arrowDown'
  | 'home'
  | 'end'
  | 'space'
  | 'pageUp'
  | 'pageDown'
  | 'tab';

const keys = {
  backspace: {
    key: 'Backspace',
    keyCode: 8,
    shiftKey: false,
  },
  enter: {
    key: 'Enter',
    keyCode: 13,
    shiftKey: false,
  },
  escape: {
    key: 'Escape',
    keyCode: 27,
    shiftKey: false,
  },
  arrowRight: {
    key: 'ArrowRight',
    keyCode: 39,
    shiftKey: false,
  },
  arrowLeft: {
    key: 'ArrowLeft',
    keyCode: 37,
    shiftKey: false,
  },
  arrowUp: {
    key: 'ArrowUp',
    keyCode: 38,
    shiftKey: false,
  },
  arrowDown: {
    key: 'ArrowDown',
    keyCode: 40,
    shiftKey: false,
  },
  home: {
    key: 'Home',
    keyCode: 36,
    shiftKey: false,
  },
  end: {
    key: 'End',
    keyCode: 35,
    shiftKey: false,
  },
  space: {
    key: ' ',
    keyCode: 32,
    shiftKey: false,
  },
  pageUp: {
    key: 'PageUp',
    keyCode: 33,
    shiftKey: false,
  },
  pageDown: {
    key: 'PageDown',
    keyCode: 34,
    shiftKey: false,
  },
  tab: {
    key: 'Tab',
    keyCode: 9,
    shiftKey: false,
  },
};

function compareEvent<T extends Element>(event: EventKeys, e: React.KeyboardEvent<T>): boolean {
  return (
    !!keys[event] &&
    (e.key === keys[event].key || e.keyCode === keys[event].keyCode) &&
    e.shiftKey === keys[event].shiftKey
  );
}

/**
 * Key down event handler
 * @example onKey('escape', () => foo())(e)
 */
export function onKey<T extends Element>(event: EventKeys, callback: React.KeyboardEventHandler) {
  return function handleEvent(e: React.KeyboardEvent<T>): void {
    if (compareEvent(event, e)) {
      return callback(e);
    }
  };
}

/**
 * Multiple key down event handler
 * @example onKeys(['escape', 'enter'], () => foo())(e)
 */
export function onKeys<T extends Element>(
  events: EventKeys[],
  callback: React.KeyboardEventHandler,
) {
  return function handleEvents(e: React.KeyboardEvent<T>): void {
    events.forEach((event) => onKey(event, callback)(e));
  };
}
