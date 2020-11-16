import React from 'react';
import DatePicker from '../DatePicker';
import { tokens } from '@sparkpost/design-tokens';

describe('DatePicker', () => {
  const date = new Date('2017-01-05');
  const subject = props => global.mountStyled(<DatePicker {...props} numberOfMonths={1} />);

  // NPM test script prepended with `TZ=UTC` to set timezone
  // :)
  it('should always be UTC in this test', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it('should render initial month correctly', () => {
    const wrapper = subject({ initialMonth: date });
    expect(
      wrapper
        .find('[data-id="datepicker-caption"]')
        .at(0)
        .text(),
    ).toEqual('January 2017');
  });

  it('should render navbar correctly', () => {
    const wrapper = subject({ initialMonth: date });
    expect(wrapper.find('button[data-id="datepicker-previous"]').text()).toEqual('Previous Month');
    expect(wrapper.find('button[data-id="datepicker-next"]').text()).toEqual('Next Month');
  });

  it('should render navbar correctly with disabled buttons', () => {
    const wrapper = subject({ initialMonth: date, toMonth: date });
    expect(wrapper.find('button[data-id="datepicker-next"]')).toBeDisabled();
  });

  it('should be able to navigate to previous and next month with navbar', () => {
    const wrapper = subject({ initialMonth: date, toMonth: date });
    wrapper.find('button[data-id="datepicker-previous"]').simulate('click');
    expect(
      wrapper
        .find('[data-id="datepicker-caption"]')
        .at(0)
        .text(),
    ).toEqual('December 2016');
    wrapper.find('button[data-id="datepicker-next"]').simulate('click');
    expect(
      wrapper
        .find('[data-id="datepicker-caption"]')
        .at(0)
        .text(),
    ).toEqual('January 2017');
  });

  describe('modifiers', () => {
    // Only including `selected` and `disabled` modifiers as `today` is difficult to test reliably
    // and the others are modifiers provided by the UI, not react-day-picker

    it('should be able to show selected days', () => {
      const wrapper = subject({ initialMonth: date, selectedDays: date });
      expect(wrapper.find('.DayPicker-Day--selected').text()).toEqual('5');
      expect(wrapper.find('.DayPicker-Day--selected')).toHaveAttributeValue(
        'aria-selected',
        'true',
      );
      expect(wrapper.find('.DayPicker-Day--selected div')).toHaveStyleRule(
        'background',
        tokens.color_blue_300,
      );
    });

    it('should be able to show disabled days', () => {
      const wrapper = subject({ initialMonth: date, disabledDays: { after: date } });
      expect(wrapper.find('.DayPicker-Day--disabled').first()).toHaveAttributeValue(
        'aria-disabled',
        'true',
      );
      expect(wrapper.find('.DayPicker-Day--disabled div').at(0)).toHaveStyleRule('opacity', '0.3');
    });

    it('should not render outside days', () => {
      const click = jest.fn();
      const wrapper = subject({ initialMonth: date, onDayClick: click });
      expect(wrapper.find('.DayPicker-Day--outside').first()).toHaveAttributeValue(
        'aria-disabled',
        'true',
      );
      expect(
        wrapper
          .find('.DayPicker-Day--outside')
          .first()
          .text(),
      ).toBe('');
    });

    it('should not click on outside days', () => {
      const click = jest.fn();
      const wrapper = subject({ initialMonth: date, onDayClick: click });

      wrapper
        .find('.DayPicker-Day--outside')
        .first()
        .simulate('click');
      expect(click).not.toHaveBeenCalled();
    });

    it('should click on a day', () => {
      const click = jest.fn();
      const wrapper = subject({ initialMonth: date, onDayClick: click });

      wrapper
        .find('.DayPicker-Day')
        .first()
        .simulate('click');
      expect(click).toHaveBeenCalled();
    });
  });
});
