import React from 'react';
import IconBase, { createSvgIcon, createExtendedSvgIcon } from '../IconBase';
import { render } from 'test-utils';

describe('IconBase', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <IconBase>
        <path
          id="test-id"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
        />
      </IconBase>,
    );
    expect(container.querySelector('#test-id')).toBeTruthy();
    expect(container.querySelector('[width="18"]')).toBeTruthy();
    expect(container.querySelector('[height="18"]')).toBeTruthy();
    expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
  });

  it('renders with size correctly', () => {
    const { container } = render(
      <IconBase size={24}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </IconBase>,
    );
    expect(container.querySelector('[width="24"]')).toBeTruthy();
    expect(container.querySelector('[height="24"]')).toBeTruthy();
  });

  it('renders an accessible label when the label prop has a value', () => {
    const { container } = render(
      <IconBase label="Hello">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </IconBase>,
    );
    expect(container.querySelector('[aria-label="Hello"]')).toBeTruthy();
    expect(container.querySelector('[aria-hidden="false"]')).toBeTruthy();
    expect(container.querySelector('[role="img"]')).toBeTruthy();
  });
});

describe('createSvgIcon', () => {
  it('creates an Icon correctly', () => {
    const Icon = createSvgIcon(<path id="test-id" d="a path" />, 'TestIcon');
    const { container } = render(<Icon />);
    expect(container.querySelector('#test-id')).toBeTruthy();
  });
});

describe('createExtendedSvgIcon', () => {
  it('creates an extended Icon correctly', () => {
    const Icon = createExtendedSvgIcon({
      path: <path id="test-id" d="a path" />,
      displayName: 'TextIcon',
      viewBox: '0 0 100 100',
      textContainer: {
        x: '22',
        y: '62',
        fontSize: '24',
      },
    });
    const { container, getByText } = render(
      <Icon text="test text" textFill="white" textProps={{ stroke: 'black' }} />,
    );
    expect(container.querySelector('#test-id')).toBeTruthy();
    expect(getByText('test text')).toBeTruthy();
  });
});
