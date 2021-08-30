import React from 'react';
import Button from './Button';
import { filterByVisible } from '../../helpers/array';
import type { ButtonProps } from './Button';

interface ButtonPropsWithContent extends ButtonProps {
  content?: React.ReactNode;
}

export function buttonsFrom(
  actions: ButtonPropsWithContent[],
  overrides?: ButtonProps,
): JSX.Element {
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
  overrides?: ButtonProps,
  key?: React.Key,
): JSX.Element {
  return <Button key={key} children={content} {...action} {...overrides} />; // eslint-disable-line
}
