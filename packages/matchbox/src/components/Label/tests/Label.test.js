import React from 'react';
import Label from '../Label';
import { render, within } from 'test-utils';

describe('Label', () => {
  describe('deprecated use', () => {
    it('renders correctly with label prop', () => {
      const subject = render(<Label id="label1" label="Label text"></Label>);
      expect(subject.getByText('Label text')).toBeTruthy();
    });

    it('renders correctly with label prop and children', () => {
      const subject = render(
        <Label id="label1" label="Label text">
          children text
        </Label>,
      );
      expect(subject.getByText('Label text')).toBeTruthy();
      expect(subject.getByText('children text')).toBeTruthy();
    });

    it('renders correctly with id without htmlFor', () => {
      render(<Label id="label1" label="Label text"></Label>);
      expect(within(document.querySelector('#label1Label')).getByText('Label text')).toBeTruthy();
      expect(within(document.querySelector('[for="label1"]')).getByText('Label text')).toBeTruthy();
    });

    it('renders correctly with className', () => {
      render(<Label id="label1" label="Label text" className="test-class"></Label>);
      expect(within(document.querySelector('.test-class')).getByText('Label text')).toBeTruthy();
    });

    it('renders hidden correctly', () => {
      const subject = render(<Label id="label1" label="Label text" labelHidden></Label>);
      expect(subject.getByText('Label text')).toBeTruthy();
    });
  });

  it('renders children correctly', () => {
    const subject = render(<Label id="label1">Label text</Label>);
    expect(subject.getByText('Label text')).toBeTruthy();
  });

  it('renders children correctly with id', () => {
    render(
      <Label id="label1" className="test-class">
        Label text
      </Label>,
    );
    expect(within(document.querySelector('.test-class')).getByText('Label text')).toBeTruthy();
  });

  it('renders children correctly with className', () => {
    render(
      <Label id="label1" className="test-class">
        Label text
      </Label>,
    );
    expect(within(document.querySelector('#label1Label')).getByText('Label text')).toBeTruthy();
  });

  it('renders correctly id and htmlFor correctly when both are provided', () => {
    render(<Label id="id" label="Label text" htmlFor="for"></Label>);
    expect(within(document.querySelector('#id')).getByText('Label text')).toBeTruthy();
    expect(within(document.querySelector('[for="for"]')).getByText('Label text')).toBeTruthy();
  });
});
