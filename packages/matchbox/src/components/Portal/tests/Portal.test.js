import React from 'react';
import { render } from 'test-utils';
import Portal from '../Portal';

describe('Portal', () => {
  it('appends portal to body', () => {
    const { container } = render(
      <Portal>
        <span id="portal-content">Foo</span>
      </Portal>,
    );
    expect(container).toBeEmptyDOMElement();
    expect(document.getElementById('portal-content').parentElement).toBe(document.body);
  });

  it('appends portal to container id', () => {
    const target = document.createElement('div');
    target.id = 'bar';
    document.body.appendChild(target);

    render(
      <Portal containerId="bar">
        <span id="portal-content">Foo</span>
      </Portal>,
    );
    expect(document.getElementById('portal-content').parentElement).toBe(target);
    target.remove();
  });

  it('renders nothing when the container id does not exist', () => {
    render(
      <Portal containerId="missing">
        <span id="portal-content">Foo</span>
      </Portal>,
    );
    expect(document.getElementById('portal-content')).toBeNull();
  });
});
