import { findFocusableChild } from '../focus';

function setup({ wrapper = 'div', activator = 'button' } = {}) {
  const wrapperElem = document.createElement(wrapper);
  const activatorElem = document.createElement(activator);

  wrapperElem.appendChild(activatorElem);
  document.body.appendChild(wrapperElem);

  return { wrapper: wrapperElem, activator: activatorElem };
}

describe('findFocusableChild', () => {
  it('does not return self', () => {
    const { wrapper } = setup({ wrapper: 'button' });
    const focusable = findFocusableChild(wrapper);
    expect(focusable).not.toBe(wrapper);
  });

  it('returns descendant button', () => {
    const { wrapper, activator } = setup();
    const focusable = findFocusableChild(wrapper);
    expect(focusable).toBe(activator);
  });

  it('returns descendant link', () => {
    const { wrapper, activator } = setup({ activator: 'a' });
    const focusable = findFocusableChild(wrapper);
    expect(focusable).toBe(activator);
  });

  it('returns descendant input', () => {
    const { wrapper, activator } = setup({ activator: 'input' });
    const focusable = findFocusableChild(wrapper);
    expect(focusable).toBe(activator);
  });

  it('returns descendant select', () => {
    const { wrapper, activator } = setup({ activator: 'select' });
    const focusable = findFocusableChild(wrapper);
    expect(focusable).toBe(activator);
  });

  it('returns nothing if nothing is focusable', () => {
    const { wrapper } = setup({ activator: 'div' });
    const focusable = findFocusableChild(wrapper);
    expect(focusable).toBeNull();
  });
});
