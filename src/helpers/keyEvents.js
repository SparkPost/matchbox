const keys = {
  enter: {
    key: 'Enter',
    keyCode: 13,
    shiftKey: false
  },
  escape: {
    key: 'Escape',
    keyCode: 27,
    shiftKey: false
  }
};

function compareEvent(event, e) {
  return (e.key === keys[event].key || e.keyCode === keys[event].keyCode) && e.shiftKey === keys[event].shiftKey;
}

/**
 * Key down event handler
 * @example onKey('escape', () => foo()])(e)
 */
export function onKey(event, callback) {
  return function handleEvent(e) {
    if (compareEvent(event, e)) {
      return callback(e);
    }
  };
}

/**
 * Multiple key down event handler
 * @example onKeys(['escape', 'enter'], () => foo()])(e)
 */
export function onKeys(events, callback) {
  return function handleEvents(e) {
    events.forEach((event) => onKey(event, callback)(e));
  };
}
