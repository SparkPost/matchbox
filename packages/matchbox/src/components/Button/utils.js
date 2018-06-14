import React from 'react';
import Button from './Button';
import { filterByVisible } from '../../helpers/array';

export function buttonsFrom(actions, overrides) {
  const filteredActions = filterByVisible(actions);

  if (filteredActions.length) {
    return <Button.Group>{filteredActions.map((action, key) => buttonFrom(action, overrides, key))}</Button.Group>;
  }
}

export function buttonFrom({ content, ...action }, overrides, key) {
  return (
    <Button
      key={key}
      children={content}
      {...action}
      {...overrides}
    />
  );
}
