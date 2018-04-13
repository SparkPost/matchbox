import React from 'react';
import { Transition } from 'react-transition-group';
import classnames from 'classnames';
import styles from './Modal.module.scss';

const Content = ({ children, contentRef, in: inProp }) => (
  <Transition in={inProp} timeout={{ enter: 0, exit: 150 }}>
    {(state) => {
      const classes = classnames(styles.Content, state && styles[state]);
      return <div className={classes} ref={contentRef}>{ children }</div>;
    }}
  </Transition>
);

Content.displayName = 'Modal.Content';
export default Content;
