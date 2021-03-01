import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import Tabs from '../Tabs';

describe('Tabs', () => {
  const defaultprops = {
    tabs: [{ content: 'Tab 1' }, { content: 'Tab 2' }, { content: 'Tab 3', onClick: jest.fn() }],
    selected: 0,
    onSelect: jest.fn(),
  };
  const subject = props => global.mountStyled(<Tabs {...defaultprops} {...props} />);

  it('renders button type correctly', () => {
    const wrapper = subject();
    expect(
      wrapper
        .find('button')
        .first()
        .props().type,
    ).toEqual('button');
  });

  it('renders non-fitted styles', () => {
    const wrapper = subject();
    expect(wrapper.find('button').at(0)).toHaveStyleRule('flex', '0');
    expect(wrapper.find('button').at(0)).toHaveStyleRule('margin', '0 1.25rem');
  });

  it('renders fitted styles', () => {
    const wrapper = subject({ fitted: true });
    expect(wrapper.find('button').at(0)).toHaveStyleRule('flex', '1');
    expect(wrapper.find('button').at(0)).toHaveStyleRule('margin', '0 0.5rem');
  });

  it('renders with first tab selected', () => {
    const wrapper = subject();
    expect(wrapper.find('button').at(0)).toHaveStyleRule('color', tokens.color_blue_700);
    expect(wrapper.find('button').at(1)).toHaveStyleRule('color', tokens.color_gray_700);
  });

  it('handles clicking a tab', () => {
    const wrapper = subject();
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(defaultprops.onSelect).toHaveBeenCalledWith(2, 0);
    expect(defaultprops.tabs[2].onClick).toHaveBeenCalledTimes(1);
  });

  it('renders system props', () => {
    const wrapper = subject({ mx: ['400', null, '10px'] });
    const media = 'screen and (min-width:800px)';
    expect(wrapper).toHaveStyleRule('margin-left', '10px', { media });
    expect(wrapper).toHaveStyleRule('margin-right', tokens.spacing_400);
  });

  it('renders a custom tab component', () => {
    const wrapper = subject({
      tabs: [
        ...defaultprops.tabs,
        {
          content: 'Tab 4',
          component: React.forwardRef((props, ref) => <a ref={ref} {...props} />),
        },
      ],
    });
    expect(wrapper.find('a').text()).toEqual('Tab 4');
    expect(wrapper.find('a').props().type).toBeUndefined();
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <Tabs ref={ref} {...defaultprops} />
          not this
        </>
      );
    }
    global.mountStyled(<Test />);
    expect(document.activeElement.innerHTML.includes('Tab 1')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
