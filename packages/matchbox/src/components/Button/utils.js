import React from 'react';
import Button from './Button';
import { filterByVisible } from '../../helpers/array';

export function buttonsFrom(actions, overrides) {
  const filteredActions = filterByVisible(actions);

  if (filteredActions.length) {
    return (
      <Button.Group>
        {filteredActions.map((action, key) => buttonFrom(action, overrides, key))}
      </Button.Group>
    );
  }
}

export function buttonFrom({ content, ...action }, overrides, key) {
  return (
    <Button key={key} {...action} {...overrides}>
      {content}
    </Button>
  );
}

export function getLoaderColor({ variant = 'filled', color = 'gray' } = {}) {
  if (variant === 'filled') {
    if (color === 'white') {
      return 'gray';
    }

    return 'white';
  }

  if (color === 'white') {
    return 'white';
  }

  if (color === 'blue') {
    return 'blue';
  }

  return 'gray';
}
