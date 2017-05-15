import React, { Component } from 'react';
import styles from './Foo.scss';

class Foo extends Component {
  render() {
    return (
      <div className={styles.Foo}>
        <h1 className={styles.Hello}>Foo</h1>
        <h1 className={`${styles.Hello} ${styles['Hello-small']}`}>Bar</h1>
        {/*
          To apply a child variation (.Hello-small)
          styles['Hello-small']
          or
          styles.HelloSmall
        */}
      </div>
    );
  }
};

export default Foo;
