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
    icon,
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

  const iconMarkup = icon
    ? <div className={styles.Icon}>{icon}</div>
    : null;

  const contentSpacer = icon
    ? <div className={styles.ContentSpacer} />
    : null;

  const contentClasses = classnames(styles.ContentWrapper, isOpen && styles.Open);
  const arrowClasses = classnames(styles.Arrow, isOpen && styles.Open);

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
        {iconMarkup}
        <div className={styles.HeaderContent}>
          <h3 className={styles.Title}>{title}</h3>
          <h6 className={styles.Subtitle}>{subtitle}</h6>
        </div>
        <div className={styles.HeaderArrow}>
          <KeyboardArrowRight size={36} className={arrowClasses} />
        </div>
      </div>
      <div
        aria-hidden={!isOpen}
        className={contentClasses}
        id={id}
      >
        {contentSpacer}
        <div className={styles.Content}>
          {children}
        </div>
      </div>
    </div>
  );
}

Expandable.defaultProps = {
  defaultOpen: false
};

Expandable.propTypes = {
  /**
   * Default open state when not controlled
   */
  defaultOpen: Proptypes.bool,
  /**
   * Optional React node for an image or icon. Works best with an SVG optimized for 40x40.
   */
  icon: Proptypes.node,
  /**
   * Required for accessilibty between header and content
   */
  id: Proptypes.string.isRequired,
  /**
   * Pass a boolean to control open state
   */
  open: Proptypes.bool,
  /**
   * Optional, but required when controlling open state
   */
  onToggle: Proptypes.func,
  /**
   * Optional content area beneath header title
   */
  subtitle: Proptypes.node,
  /**
   * Main header title content
   */
  title: Proptypes.node.isRequired
};

export default Expandable;
