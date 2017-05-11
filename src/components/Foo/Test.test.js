import React from 'react';
import ReactDOM from 'react-dom';
import Foo from './Foo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Foo />, div);
});
