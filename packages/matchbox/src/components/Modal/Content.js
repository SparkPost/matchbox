import React from 'react';
import { Transition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import classnames from 'classnames';
import styles from './Modal.module.scss';

const Content = ({ children, contentRef, open }) => (
  <FocusLock>
    <Transition mountOnEnter unmountOnExit in={open} timeout={{ enter: 0, exit: 150 }}>
      {(state) => {
        const classes = classnames(styles.Content, state && styles[state]);
        return <div className={classes} ref={contentRef}>{children}</div>;
      }}
    </Transition>
  </FocusLock>
);

Content.displayName = 'Modal.Content';
export default Content;
