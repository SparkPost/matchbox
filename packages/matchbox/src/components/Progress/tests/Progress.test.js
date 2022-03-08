import React from 'react';
import Progress from '../Progress';
import { render } from 'test-utils';

describe('Progress', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Progress>
        <Progress.Step>children</Progress.Step>
      </Progress>,
    );
    expect(getByText('children')).toBeTruthy();
  });

  it('renders data id correctly', () => {
    const { getByTestId } = render(
      <Progress data-id="test-id">
        <Progress.Step>children</Progress.Step>
      </Progress>,
    );
    expect(getByTestId('test-id')).toBeTruthy();
  });

  it('renders id correctly', () => {
    const { getById } = render(
      <Progress id="test-id">
        <Progress.Step>children</Progress.Step>
      </Progress>,
    );
    expect(getById('test-id')).toBeTruthy();
  });
});

describe('Progress.Step', () => {
  it('renders id correctly', () => {
    const { getByText, getById } = render(
      <Progress>
        <Progress.Step id="test-id">children</Progress.Step>
      </Progress>,
    );
    expect(getById('test-id')).toBeTruthy();
    expect(getByText('children').tagName).toBe('A');
  });

  it('handles as prop', () => {
    const { getByRole } = render(
      <Progress>
        <Progress.Step as="button">children</Progress.Step>
      </Progress>,
    );
    expect(getByRole('button')).toBeTruthy();
  });

  it('handles refs', () => {
    const Test = () => {
      let ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <Progress>
          <Progress.Step ref={ref}>children</Progress.Step>
        </Progress>
      );
    };
    render(<Test />);
    expect(document.activeElement.innerHTML.includes('children')).toBe(true);
  });
});
