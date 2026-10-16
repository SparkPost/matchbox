import React from 'react';
import { render, within } from 'test-utils';
import Panel from '../Panel';
import { tokens } from '@sparkpost/design-tokens';

describe('Panel', () => {
  const accentOf = (wrapper) => wrapper.firstChild.firstChild;
  const innerOf = (wrapper) => wrapper.firstChild.lastChild;
  const sectionWithText = (wrapper, text) => within(wrapper).getByText(text).parentElement;

  const subject = () =>
    render(
      <Panel accent sectioned title="test title">
        Panel Content
      </Panel>,
    ).container;

  it('renders panel styles', () => {
    expect(subject().firstChild).toHaveStyleRule('background', tokens.color_white);
  });

  it('renders header styles', () => {
    expect(innerOf(subject()).children[0]).toHaveStyleRule('display', 'flex');
  });

  it('renders section styles', () => {
    const wrapper = render(
      <Panel accent sectioned title="test title">
        <Panel.Section>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>,
    ).container;

    const fooSection = sectionWithText(wrapper, 'Foo');
    const sectionedWrapper = fooSection.parentElement.parentElement;
    expect(sectionedWrapper).toHaveStyleRule('display', 'flex');
    expect(sectionedWrapper).toHaveStyleRule(
      'border-bottom',
      `${tokens.borderWidth_100} solid ${tokens.color_gray_400}`,
    );
    expect(fooSection).toHaveStyleRule('border-bottom', 'none', {
      modifier: ':last-of-type',
    });
  });

  it('renders accent colors', () => {
    let orangeWrapper = render(<Panel accent="orange" />).container;
    let greenWrapper = render(<Panel accent="green" />).container;
    let yellowWrapper = render(<Panel accent="yellow" />).container;
    let redWrapper = render(<Panel accent="red" />).container;
    let grayWrapper = render(<Panel accent="gray" />).container;
    let blueWrapper = render(<Panel accent="blue" />).container;
    let purpleWrapper = render(<Panel accent="purple" />).container;

    expect(accentOf(orangeWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_brand_orange,
    );
    expect(accentOf(greenWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_green_700,
    );
    expect(accentOf(yellowWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_yellow_400,
    );
    expect(accentOf(redWrapper)).toHaveStyleRule('background-color', tokens.color_red_700);
    expect(accentOf(grayWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_gray_600,
    );
    expect(accentOf(blueWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
    expect(accentOf(purpleWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
  });

  it('renders accent title and header action correctly', () => {
    const wrapper = render(
      <Panel accent sectioned title="test title" actions={[{ content: 'Action' }]}>
        Foo
      </Panel>,
    ).container;
    const PanelWrapper = wrapper;
    expect(innerOf(PanelWrapper).children[0].querySelectorAll('div')[0].textContent).toEqual(
      'test title',
    );
    expect(accentOf(PanelWrapper)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
    expect(PanelWrapper.querySelector('button').textContent).toEqual('Action');
  });

  it('renders correctly with sections', () => {
    const wrapper = render(
      <Panel>
        <Panel.Section actions={[{ content: 'Action' }]}>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>,
    ).container;
    const [fooSection, barSection] = innerOf(wrapper).children;
    expect(fooSection.firstChild.textContent).toEqual('Foo');
    expect(fooSection.querySelector('button').textContent).toEqual('Action');
    expect(barSection.firstChild.textContent).toEqual('Bar');
  });

  it('renders correctly with footer', () => {
    const wrapper = render(
      <div>
        <Panel />
        <Panel.Footer left={<span>left</span>} right="right" />
      </div>,
    ).container;
    const [left, right] = wrapper.firstChild.lastChild.firstChild.children;
    expect(left.innerHTML).toEqual('<span>left</span>');
    expect(right.textContent).toEqual('right');
  });

  it('renders default padding context correctly', () => {
    const wrapper = render(<Panel sectioned>test</Panel>).container;
    expect(sectionWithText(wrapper, 'test')).toHaveStyleRule('padding', '1.5rem');
  });

  it('renders default padding context correctly on sections', () => {
    const wrapper = render(
      <Panel>
        <Panel.Section>1</Panel.Section>
        <Panel.Section>2</Panel.Section>
      </Panel>,
    ).container;
    // Spacing theme values are mocked in jest, these are not representative of tokens
    expect(sectionWithText(wrapper, '1')).toHaveStyleRule('padding', '1.5rem');
    expect(sectionWithText(wrapper, '2')).toHaveStyleRule('padding', '1.5rem');
  });

  it('renders default contextual padding and a section with padding overide', () => {
    const wrapper = render(
      <Panel p="600">
        <Panel.Section>1</Panel.Section>
        <Panel.Section px="300" py="500">
          2
        </Panel.Section>
      </Panel>,
    ).container;
    // Spacing theme values are mocked in jest, these are not representative of tokens
    expect(sectionWithText(wrapper, '1')).toHaveStyleRule('padding', '2rem');
    expect(sectionWithText(wrapper, '2')).toHaveStyleRule('padding-left', '0.5rem');
    expect(sectionWithText(wrapper, '2')).toHaveStyleRule('padding-top', '1.5rem');
  });

  it('renders other system props', () => {
    const wrapper = render(
      <Panel borderBottom="none" width="30px" height="50px"></Panel>,
    ).container;
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('width', '30px');
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('width', undefined);
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('border-bottom', undefined);
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('border-bottom', 'none');
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('height', '50px');
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('height', '100%');
  });

  it('renders with the passed in className', () => {
    const wrapper = render(<Panel className="my-class">Hello, world.</Panel>).container;

    expect(wrapper.querySelector('.my-class')).toBeInTheDocument();
  });

  it('renders with the passed in className on a section', () => {
    const wrapper = render(
      <Panel>
        <Panel.Section className="my-class">Hello, world.</Panel.Section>
      </Panel>,
    ).container;
    expect(wrapper.querySelector('.my-class')).toBeInTheDocument();
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
    render(<Test />).container;
    expect(document.activeElement.innerHTML.includes('Hello, world')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
