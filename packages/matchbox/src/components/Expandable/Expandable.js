import React from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import { KeyboardArrowRight } from '@sparkpost/matchbox-icons';
import { onKeys } from '../../helpers/keyEvents';
import styles from './Expandable.module.scss';

function Expandable(props) {
  const {
    children,
    defaultOpen,
    id,
    open,
    onToggle,
    subtitle,
    title
  } = props;

  const header = React.useRef();
  const [isOpen, setIsOpen] = React.useState(open || defaultOpen);
  const controlled = typeof open === 'boolean';

  // Sets internal open state when controlled externally
  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  // Handles onToggle when open state is uncontrolled
  React.useEffect(() => {
    if (!controlled && onToggle) {
      onToggle();
    }
  }, [isOpen]);

  function handleToggle() {
    if (controlled) {
      onToggle();
    } else {
      setIsOpen(!isOpen);
    }
  }

  function handleClick() {
    header.current.blur();
    handleToggle();
  }

  function handleKeyDown(e) {
    onKeys(['space', 'enter'], () => {
      e.preventDefault();
      handleToggle();
    })(e);
  }

  const contentClasses = classnames(styles.Content, isOpen && styles.Open);
  const iconClasses = classnames(styles.Icon, isOpen && styles.Open);

  return (
    <div className={styles.Expandable}>
      <div
        aria-controls={id}
        aria-expanded={isOpen}
        className={styles.Header}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={header}
        role='button'
        tabIndex='1'
      >
        <div className={styles.HeaderContent}>
          <h3 className={styles.Title}>{title}</h3>
          <h6 className={styles.Subtitle}>{subtitle}</h6>
        </div>
        <div className={styles.HeaderArrow}>
          <KeyboardArrowRight size={36} className={iconClasses} />
        </div>
      </div>
      <div
        aria-hidden={isOpen}
        className={contentClasses}
        id={id}
      >
        {children}
      </div>
    </div>
  );
}

Expandable.defaultProps = {
  defaultOpen: false
};

Expandable.proptypes = {
  /**
   * Default open state when not controlled
   */
  defaultOpen: Proptypes.bool,
  /**
   * Optional React node for an image or icon
   *
   */
  icon: Proptypes.node,
  /**
   * Required for accessilibty between header and content
   *
   */
  id: Proptypes.string.isRequired,
  /**
   * Pass a boolean to control open state
   *
   */
  open: Proptypes.bool,
  /**
   * Optional, but required when controlling open state
   *
   */
  onToggle: Proptypes.func,
  subtitle: Proptypes.node,
  title: Proptypes.node.isRequired
};

export default Expandable;
