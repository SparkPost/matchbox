'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = { "Foo": "Foo", "Hello": "Hello", "small": "small" };

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Foo = function (_Component) {
  inherits(Foo, _Component);

  function Foo() {
    classCallCheck(this, Foo);
    return possibleConstructorReturn(this, (Foo.__proto__ || Object.getPrototypeOf(Foo)).apply(this, arguments));
  }

  createClass(Foo, [{
    key: 'render',
    value: function render() {
      // return <h1>HELLO</h1>;
      return React__default.createElement(
        'div',
        { className: styles.Foo },
        React__default.createElement(
          'h1',
          { className: styles.hello },
          'HELLOa'
        ),
        React__default.createElement(
          'h1',
          { className: (styles.hello, styles.small) },
          'HELLOb'
        )
      );
    }
  }]);
  return Foo;
}(React.Component);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Test } from './components';
// import './styles/index.css';
//
// ReactDOM.render(
//   <Test />,
//   document.getElementById('root')
// );

exports.Foo = Foo;
