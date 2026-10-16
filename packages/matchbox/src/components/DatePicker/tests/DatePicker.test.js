import React from 'react';
import { render, fireEvent } from 'test-utils';
import DatePicker from '../DatePicker';
import { tokens } from '@sparkpost/design-tokens';

describe('DatePicker', () => {
  const date = new Date('2017-01-05');
  const subject = (props) => render(<DatePicker {...props} numberOfMonths={1} />).container;

  // NPM test script prepended with `TZ=UTC` to set timezone
  // :)
  it('should always be UTC in this test', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it('should render initial month correctly', () => {
    const wrapper = subject({ initialMonth: date });
    expect(wrapper.querySelectorAll('[data-id="datepicker-caption"]')[0].textContent).toEqual(
      'January 2017',
    );
  });

  it('should render navbar correctly', () => {
    const wrapper = subject({ initialMonth: date });
    expect(wrapper.querySelector('button[data-id="datepicker-previous"]').textContent).toEqual(
      'Previous Month',
    );
    expect(wrapper.querySelector('button[data-id="datepicker-next"]').textContent).toEqual(
      'Next Month',
    );
  });

  it('should render navbar correctly with disabled buttons', () => {
    const wrapper = subject({ initialMonth: date, toMonth: date });
    expect(wrapper.querySelector('button[data-id="datepicker-next"]')).toBeDisabled();
  });

  it('should be able to navigate to previous and next month with navbar', () => {
    const wrapper = subject({ initialMonth: date, toMonth: date });
    fireEvent.click(wrapper.querySelector('button[data-id="datepicker-previous"]'));
    expect(wrapper.querySelectorAll('[data-id="datepicker-caption"]')[0].textContent).toEqual(
      'December 2016',
    );
    fireEvent.click(wrapper.querySelector('button[data-id="datepicker-next"]'));
    expect(wrapper.querySelectorAll('[data-id="datepicker-caption"]')[0].textContent).toEqual(
      'January 2017',
    );
  });

  describe('modifiers', () => {
    // Only including `selected` and `disabled` modifiers as `today` is difficult to test reliably
    // and the others are modifiers provided by the UI, not react-day-picker

    it('should be able to show selected days', () => {
      const wrapper = subject({ initialMonth: date, selectedDays: date });
      expect(wrapper.querySelector('.DayPicker-Day--selected').textContent).toEqual('5');
      expect(wrapper.querySelector('.DayPicker-Day--selected')).toHaveAttributeValue(
        'aria-selected',
        'true',
      );
      expect(wrapper.querySelector('.DayPicker-Day--selected div')).toHaveStyleRule(
        'background',
        tokens.color_blue_300,
      );
    });

    it('should be able to show disabled days', () => {
      const wrapper = subject({ initialMonth: date, disabledDays: { after: date } });
      expect(wrapper.querySelector('.DayPicker-Day--disabled')).toHaveAttributeValue(
        'aria-disabled',
        'true',
      );
      expect(wrapper.querySelectorAll('.DayPicker-Day--disabled div')[0]).toHaveStyleRule(
        'opacity',
        '0.3',
      );
    });

    it('should not render outside days', () => {
      const click = jest.fn();
      const wrapper = subject({ initialMonth: date, onDayClick: click });
      expect(wrapper.querySelector('.DayPicker-Day--outside')).toHaveAttributeValue(
        'aria-disabled',
        'true',
      );
      expect(wrapper.querySelector('.DayPicker-Day--outside').textContent).toBe('');
    });

    it('should not click on outside days', () => {
      const click = jest.fn();
      const wrapper = subject({ initialMonth: date, onDayClick: click });

      fireEvent.click(wrapper.querySelector('.DayPicker-Day--outside'));
      expect(click).not.toHaveBeenCalled();
    });

    it('should click on a day', () => {
      const click = jest.fn();
      const wrapper = subject({ initialMonth: date, onDayClick: click });

      fireEvent.click(wrapper.querySelector('.DayPicker-Day'));
      expect(click).toHaveBeenCalled();
    });
  });
});
