import React from 'react';
import { Transition } from 'react-transition-group';
import classnames from 'classnames';
import styles from './Popover.module.scss';

const Content = ({
  children,
  popoverRef,
  wrapperClasses,
  popoverClasses,
  open,
  ...rest
}) => (
  <Transition mountOnEnter unmountOnExit in={open} timeout={{ enter: 0, exit: 100 }}>
    {(state) => (
      <div className={wrapperClasses} ref={popoverRef}>
        <div className={classnames(popoverClasses, state && styles[state])} {...rest}>
          <span className={styles.Tip} />
          <div className={styles.Content}>
            {children}
          </div>
        </div>
      </div>
    )}
  </Transition>
);

Content.displayName = 'Popover.Content';
export default Content;
