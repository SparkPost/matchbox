import React from 'react';
import { Transition } from 'react-transition-group';
import classnames from 'classnames';
import styles from './Popover.module.scss';

const Content = ({
  children,
  popoverRef,
  open,
  activatorWidth,
  top, left, bottom, right, fixed,
  sectioned,
  className = '',
  trigger,
  ...rest
}) => {

  const popoverClasses = classnames(
    styles.Popover,
    sectioned && styles.sectioned,
    className
  );

  const wrapperClasses = classnames(
    styles.Wrapper,
    top && styles.top,
    left && styles.left
  );

  const tipStyle = { [left ? 'right' : 'left']: activatorWidth / 2 };

  return (
    <Transition mountOnEnter unmountOnExit in={open} timeout={{ enter: 0, exit: 0 }}>
      {(state) => (
        <div className={wrapperClasses} ref={popoverRef}>
          <div className={classnames(popoverClasses, state && styles[state])} {...rest}>
            <span className={styles.Tip} style={tipStyle} />
            <div className={styles.Content}>
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

Content.displayName = 'Popover.Content';
export default Content;
