import React, { Component } from 'react';
import Next from './Next';
import Previous from './Previous';
import styles from './Pager.module.scss';

class Pager extends Component {
  static displayName = 'Pager';

  static Next = Next
  static Previous = Previous

  render() {
    return (
      <div className={styles.Pager}>
        {this.props.children}
      </div>
    );
  }
}

export default Pager;
