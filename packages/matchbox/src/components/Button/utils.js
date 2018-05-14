import React from 'react';
import Button from './Button';

export function buttonsFrom(actions, overrides) {
  if (actions.length) {
    return <Button.Group>{actions.map((action, key) => buttonFrom(action, overrides, key))}</Button.Group>;
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
