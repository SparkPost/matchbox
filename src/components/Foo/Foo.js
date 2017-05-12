import React, { Component } from 'react';
import styles from './Foo.scss';

class Foo extends Component {
  render() {
    // return <h1>HELLO</h1>;
    return (
      <div className={styles.Foo}>
          <h1 className={styles.hello}>HELLOa</h1>
          <h1 className={styles.hello, styles.small}>HELLOb</h1>
      </div>

    );
  }
};

export default Foo;
