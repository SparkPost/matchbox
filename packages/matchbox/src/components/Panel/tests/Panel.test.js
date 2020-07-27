import React from 'react';
import Panel from '../Panel';
import Accent from '../Accent';
// import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('Panel Components', () => {
  const subject = props => global.mountStyled(<Panel {...props} />);

  describe('Panel', () => {
    it('renders children correctly', () => {
      let wrapper = subject({ children: 'Panel Content' });
      expect(wrapper.text()).toEqual('Panel Content');
    });

    describe('accent colors', () => {
      it('renders a boolean accent correctly', () => {
        let wrapper = subject({ accent: true });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'blue.700');
      });

      it('renders a blue accent correctly', () => {
        let wrapper = subject({ accent: 'blue' });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'blue.700');
      });

      it('renders a orange accent correctly', () => {
        let wrapper = subject({ accent: 'orange' });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'brand.orange');
      });

      it('renders a green accent correctly', () => {
        let wrapper = subject({ accent: 'green' });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'green.700');
      });

      it('renders a yellow accent correctly', () => {
        let wrapper = subject({ accent: 'yellow' });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'yellow.400');
      });

      it('renders a red accent correctly', () => {
        let wrapper = subject({ accent: 'red' });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'red.700');
      });

      it('renders a gray accent correctly', () => {
        let wrapper = subject({ accent: 'gray' });
        expect(wrapper.find(Accent)).toHaveStyleRule('background-color', 'gray.600');
      });
    });

    it('renders a height system prop correctly', () => {
      let wrapper = subject({ height: '50px' });
      expect(wrapper.find('div').at(0)).toHaveStyleRule('height', '50px');
      expect(wrapper.find('div').at(1)).toHaveStyleRule('height', '100%');
    });
  });

  describe('Panel.Header', () => {
    it('renders children correctly', () => {
      let wrapper = subject({ children: <Panel.Header>Header Content</Panel.Header> });
      expect(wrapper.text()).toEqual('Header Content');
    });

    it('renders with a border bottom correctly', () => {
      let wrapper = subject({ children: <Panel.Header borderBottom>Header Content</Panel.Header> });
      expect(wrapper.find(Panel.Header)).toHaveStyleRule('border-bottom', '400');
      expect(wrapper.find(Panel.Header)).toHaveStyleRule('padding-bottom', undefined);
    });

    it('renders with a default padding correctly', () => {
      let wrapper = subject({ children: <Panel.Header>Header Content</Panel.Header> });
      expect(wrapper.find(Panel.Header)).toHaveStyleRule('padding', '1.5rem');
    });

    it('renders with a set padding correctly', () => {
      let wrapper = subject({
        padding: '400',
        children: <Panel.Header>Header Content</Panel.Header>,
      });
      expect(wrapper.find(Panel.Header)).toHaveStyleRule('padding', '1rem');
    });

    it('renders with actions', () => {
      const handleClick = jest.fn();
      let wrapper = subject({
        children: (
          <Panel.Header>
            <Panel.Action onClick={handleClick}>Header Action</Panel.Action>Header Content
          </Panel.Header>
        ),
      });
      expect(wrapper.find('button').text()).toEqual('Header Action');
      wrapper.find('button').simulate('click');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Panel.Section', () => {
    it('renders children correctly', () => {
      let wrapper = subject({ children: <Panel.Section>Section Content</Panel.Section> });
      expect(wrapper.text()).toEqual('Section Content');
    });

    it('renders with a default padding correctly', () => {
      let wrapper = subject({ children: <Panel.Section>Section Content</Panel.Section> });
      expect(wrapper.find(Panel.Section)).toHaveStyleRule('padding', '1.5rem');
    });

    it('renders with a set padding correctly', () => {
      let wrapper = subject({
        padding: '400',
        children: <Panel.Section>Section Content</Panel.Section>,
      });
      expect(wrapper.find(Panel.Section)).toHaveStyleRule('padding', '1rem');
    });

    it('renders with actions', () => {
      const handleClick = jest.fn();
      let wrapper = subject({
        children: (
          <Panel.Section>
            <Panel.Action onClick={handleClick}>Section Action</Panel.Action>Section Content
          </Panel.Section>
        ),
      });
      expect(wrapper.find('button').text()).toEqual('Section Action');
      wrapper.find('button').simulate('click');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
