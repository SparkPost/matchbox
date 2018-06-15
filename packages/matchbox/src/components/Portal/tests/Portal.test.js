import React from 'react';
import Portal from '../Portal';
import { shallow } from 'enzyme';
import * as reactDOMMock from 'react-dom';

jest.mock('react-dom');

describe('Portal', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('appends portal to body', () => {
    shallow(<Portal>Foo</Portal>);
    expect(reactDOMMock.createPortal).toHaveBeenCalledWith('Foo', document.body);
  });

  it('appends portal to container id', () => {
    document.getElementById = jest.fn(() => 'bar');
    shallow(<Portal containerId='bar'>Foo</Portal>);
    expect(reactDOMMock.createPortal).toHaveBeenCalledWith('Foo', 'bar');
  });
});
