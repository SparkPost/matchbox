const keys = {
  enter: {
    key: 'Enter',
    keyCode: 13
  },
  escape: {
    key: 'Escape',
    keyCode: 27
  }
};

export function onEvents(events, callback) {
  return function handleEvents(e) {
    events.forEach((event) => {
      if (e.key === keys[event].key || e.keyCode === keys[event].keyCode && ! e.shiftKey) {
        return callback(e);
      }
    });
  };
}

export function onEvent(event, callback) {
  return function handleEvent(e) {
    if (e.key === keys[event].key || e.keyCode === keys[event].keyCode && ! e.shiftKey) {
      return callback(e);
    }
  };
}
