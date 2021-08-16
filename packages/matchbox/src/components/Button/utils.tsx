import React from 'react';
import Button from './Button';
import { filterByVisible } from '../../helpers/array';
import type { BaseProps } from './Button';

interface ButtonPropsWithContent extends BaseProps {
  content?: React.ReactNode;
}

export function buttonsFrom(actions: ButtonPropsWithContent[], overrides: BaseProps) {
  const filteredActions = filterByVisible(actions);

  if (filteredActions.length) {
    return (
      <Button.Group>
        {filteredActions.map((action: ButtonPropsWithContent, key: React.Key) =>
          buttonFrom(action, overrides, key),
        )}
      </Button.Group>
    );
  }
}

export function buttonFrom(
  { content, ...action }: ButtonPropsWithContent,
  overrides: BaseProps,
  key: React.Key,
) {
  return <Button key={key} children={content} {...action} {...overrides} />; // eslint-disable-line
}
