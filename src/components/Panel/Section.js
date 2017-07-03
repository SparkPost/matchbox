import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttonsFrom } from '../Button';
import styles from './Panel.module.scss';

const actionOverrides = { plain: true, size: 'small' };

class Section extends Component {
  static propTypes = {
     /**
      * Actions that build buttons. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
     actions: PropTypes.arrayOf(PropTypes.shape({
       content: PropTypes.string.isRequired
     })),
     /**
      * Panel Content
      */
     children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
     ]),
  };

  render() {
    const {
      children,
      actions
    } = this.props;

    const actionMarkup = actions && actions.length
          ? <div className={styles.Actions}>{ buttonsFrom(actions, actionOverrides) }</div>
          : null;

    return (
      <div className={styles.Body}>
        <div className={styles.SectionContent}>
          { children }
        </div>
        { actionMarkup }
      </div>
    );
  }
}

Section.displayName = 'Panel.Section';
export default Section;
