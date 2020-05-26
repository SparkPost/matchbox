import React from 'react';
import Panel from '../Panel';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('Panel', () => {
  let wrapper = global.mountStyled(
    <Panel accent sectioned title="test title">
      Panel Content
    </Panel>,
  );

  it('renders panel styles', () => {
    expect(wrapper).toHaveStyleRule('background', tokens.color_white);
  });

  it('renders header styles', () => {
    expect(wrapper.find(Panel.Header)).toHaveStyleRule('display', 'flex');
  });

  it('renders section styles', () => {
    wrapper = global.mountStyled(
      <Panel accent sectioned title="test title">
        <Panel.Section>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>,
    );

    expect(wrapper.find(Panel.Section).at(0)).toHaveStyleRule('display', 'flex');
    expect(wrapper.find(Panel.Section).at(0)).toHaveStyleRule(
      'border-bottom',
      `${tokens.borderWidth_100} solid ${tokens.color_gray_400}`,
    );
    expect(wrapper.find(Panel.Section).at(1)).toHaveStyleRule('border-bottom', 'none', {
      modifier: ':last-of-type',
    });
  });

  it('renders accent colors', () => {
    let orangeWrapper = global.mountStyled(<Panel accent="orange" />);
    let greenWrapper = global.mountStyled(<Panel accent="green" />);
    let yellowWrapper = global.mountStyled(<Panel accent="yellow" />);
    let redWrapper = global.mountStyled(<Panel accent="red" />);
    let grayWrapper = global.mountStyled(<Panel accent="gray" />);
    let blueWrapper = global.mountStyled(<Panel accent="blue" />);
    let purpleWrapper = global.mountStyled(<Panel accent="purple" />);

    expect(orangeWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_brand_orange,
    );
    expect(greenWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_green_700,
    );
    expect(yellowWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_yellow_400,
    );
    expect(redWrapper.find(Panel.Accent)).toHaveStyleRule('background-color', tokens.color_red_700);
    expect(grayWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_gray_600,
    );
    expect(blueWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
    expect(purpleWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
  });

  it('renders accent title and header action correctly', () => {
    wrapper = global.mountStyled(
      <Panel accent sectioned title="test title" actions={[{ content: 'Action' }]}>
        Foo
      </Panel>,
    );
    const PanelWrapper = wrapper;
    expect(
      PanelWrapper.find(Panel.Header)
        .find('div')
        .at(1)
        .text(),
    ).toEqual('test title');
    expect(PanelWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
    expect(PanelWrapper.find('Button').text()).toEqual('Action');
  });

  it('renders correctly with sections', () => {
    wrapper = global.mountStyled(
      <Panel>
        <Panel.Section actions={[{ content: 'Action' }]}>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>,
    );
    expect(
      wrapper
        .find(Panel.Section)
        .at(0)
        .find('div')
        .at(1)
        .text(),
    ).toEqual('Foo');
    expect(
      wrapper
        .find(Panel.Section)
        .at(0)
        .find('Button')
        .text(),
    ).toEqual('Action');
    expect(
      wrapper
        .find(Panel.Section)
        .at(1)
        .find('div')
        .at(1)
        .text(),
    ).toEqual('Bar');
  });

  it('renders correctly with footer', () => {
    wrapper = global.mountStyled(
      <div>
        <Panel />
        <Panel.Footer left={<span>left</span>} right="right" />
      </div>,
    );
    expect(
      wrapper
        .find(Panel.Footer)
        .find('div')
        .at(2)
        .children()
        .html(),
    ).toEqual('<span>left</span>');
    expect(
      wrapper
        .find(Panel.Footer)
        .find('div')
        .at(3)
        .text(),
    ).toEqual('right');
  });

  it('renders default padding context correctly', () => {
    wrapper = global.mountStyled(<Panel sectioned>test</Panel>);
    expect(wrapper.find(Panel.Section)).toHaveStyleRule('padding', '1.5rem');
  });

  it('renders default padding context correctly on sections', () => {
    wrapper = global.mountStyled(
      <Panel>
        <Panel.Section>1</Panel.Section>
        <Panel.Section>2</Panel.Section>
      </Panel>,
    );
    // Spacing theme values are mocked in jest, these are not representative of tokens
    expect(wrapper.find(Panel.Section).at(0)).toHaveStyleRule('padding', '1.5rem');
    expect(wrapper.find(Panel.Section).at(1)).toHaveStyleRule('padding', '1.5rem');
  });

  it('renders default contextual padding and a section with padding overide', () => {
    wrapper = global.mountStyled(
      <Panel p="600">
        <Panel.Section>1</Panel.Section>
        <Panel.Section px="300" py="500">
          2
        </Panel.Section>
      </Panel>,
    );
    // Spacing theme values are mocked in jest, these are not representative of tokens
    expect(wrapper.find(Panel.Section).at(0)).toHaveStyleRule('padding', '2rem');
    expect(wrapper.find(Panel.Section).at(1)).toHaveStyleRule('padding-left', '0.5rem');
    expect(wrapper.find(Panel.Section).at(1)).toHaveStyleRule('padding-top', '1.5rem');
  });

  it('renders with the passed in className', () => {
    wrapper = global.mountStyled(<Panel className="my-class">Hello, world.</Panel>);

    expect(wrapper.find('.my-class')).toExist();
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <Panel ref={ref}>Hello, world</Panel>not this
        </>
      );
    }
    global.mountStyled(<Test />);
    expect(document.activeElement.innerHTML.includes('Hello, world')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
