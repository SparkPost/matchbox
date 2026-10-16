import React from 'react';
import { render, fireEvent } from 'test-utils';
import Panel from '../Panel';

describe('Panel Components', () => {
  const subject = (props) => render(<Panel {...props} />).container;
  const panelChild = (wrapper, index = 0) => wrapper.firstChild.firstChild.children[index];

  describe('Panel', () => {
    it('renders children correctly', () => {
      let wrapper = subject({ children: 'Panel Content' });
      expect(wrapper.textContent).toEqual('Panel Content');
    });

    describe('accent colors', () => {
      it('renders a boolean accent correctly', () => {
        let wrapper = subject({ accent: true });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'blue');
      });

      it('renders a blue accent correctly', () => {
        let wrapper = subject({ accent: 'blue' });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'blue');
      });

      it('renders a orange accent correctly', () => {
        let wrapper = subject({ accent: 'orange' });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'brand.orange');
      });

      it('renders a green accent correctly', () => {
        let wrapper = subject({ accent: 'green' });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'green.700');
      });

      it('renders a yellow accent correctly', () => {
        let wrapper = subject({ accent: 'yellow' });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'yellow.400');
      });

      it('renders a red accent correctly', () => {
        let wrapper = subject({ accent: 'red' });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'red');
      });

      it('renders a gray accent correctly', () => {
        let wrapper = subject({ accent: 'gray' });
        expect(panelChild(wrapper)).toHaveStyleRule('background-color', 'gray.600');
      });
    });

    it('renders a height system prop correctly', () => {
      let wrapper = subject({ height: '50px' });
      expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('height', '50px');
      expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('height', '100%');
    });
  });

  describe('Panel.SubHeader', () => {
    it('renders SubHeader correctly', () => {
      let wrapper = subject({ children: <Panel.SubHeader>The SubHeader</Panel.SubHeader> });
      expect(wrapper.textContent).toEqual('The SubHeader');
      expect(wrapper.querySelector('h4')).toBeInTheDocument();
    });

    it('renders with a default padding correctly', () => {
      let wrapper = subject({ children: <Panel.SubHeader>SubHeader Content</Panel.SubHeader> });
      expect(panelChild(wrapper)).toHaveStyleRule('padding', '1rem');
      expect(panelChild(wrapper)).toHaveStyleRule('padding-bottom', '0');
    });

    it('renders with a set padding correctly', () => {
      let wrapper = subject({
        padding: '500',
        children: <Panel.SubHeader>SubHeader Content</Panel.SubHeader>,
      });
      expect(panelChild(wrapper)).toHaveStyleRule('padding', '1.5rem');
    });

    it('renders inverted appearance correctly', () => {
      let wrapper = subject({
        appearance: 'inverted',
        children: (
          <>
            <Panel.Header>The Header</Panel.Header>
            <Panel.Section>Panel Section</Panel.Section>
          </>
        ),
      });

      expect(panelChild(wrapper, 1)).toHaveStyleRule('color', 'white');
      expect(panelChild(wrapper, 0)).toHaveStyleRule('color', 'white');
    });
  });

  describe('Panel.Header', () => {
    it('renders children correctly', () => {
      let wrapper = subject({ children: <Panel.Header>Header Content</Panel.Header> });
      expect(wrapper.textContent).toEqual('Header Content');
      expect(wrapper.querySelector('h3')).toBeInTheDocument();
    });

    it('renders with a border bottom correctly', () => {
      let wrapper = subject({ children: <Panel.Header borderBottom>Header Content</Panel.Header> });
      expect(panelChild(wrapper)).toHaveStyleRule('border-bottom', '300');
      expect(panelChild(wrapper)).toHaveStyleRule('padding-bottom', undefined);
    });

    it('renders with a default padding correctly', () => {
      let wrapper = subject({ children: <Panel.Header>Header Content</Panel.Header> });
      expect(panelChild(wrapper)).toHaveStyleRule('padding', '1rem');
    });

    it('renders with a set padding correctly', () => {
      let wrapper = subject({
        padding: '500',
        children: <Panel.Header>Header Content</Panel.Header>,
      });
      expect(panelChild(wrapper)).toHaveStyleRule('padding', '1.5rem');
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
      expect(wrapper.querySelector('button').textContent).toEqual('Header Action');
      fireEvent.click(wrapper.querySelector('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders with the passed in "data-id"', () => {
      let wrapper = subject({ 'data-id': 'my-panel' });

      expect(wrapper.querySelector('[data-id="my-panel"]')).toBeInTheDocument();
    });
  });

  describe('Panel.Section', () => {
    it('renders children correctly', () => {
      let wrapper = subject({ children: <Panel.Section>Section Content</Panel.Section> });
      expect(wrapper.textContent).toEqual('Section Content');
    });

    it('renders with empty children correctly', () => {
      let wrapper = subject({ children: <Panel.Section></Panel.Section> });
      expect(panelChild(wrapper)).toBeInTheDocument();
      expect(panelChild(wrapper)).toHaveTextContent('');
    });

    it('renders with a default padding correctly', () => {
      let wrapper = subject({ children: <Panel.Section>Section Content</Panel.Section> });
      expect(panelChild(wrapper)).toHaveStyleRule('padding', '1rem');
    });

    it('renders with a set padding correctly', () => {
      let wrapper = subject({
        padding: '500',
        children: <Panel.Section>Section Content</Panel.Section>,
      });
      expect(panelChild(wrapper)).toHaveStyleRule('padding', '1.5rem');
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
      expect(wrapper.querySelector('button').textContent).toEqual('Section Action');
      fireEvent.click(wrapper.querySelector('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
