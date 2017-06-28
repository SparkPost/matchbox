import React, { Component } from 'react';
import styles from './Panel.module.scss';

const Section = ({ children }) => (
  <div className={styles.Body}>{ children }</div>
);

Section.displayName = 'Panel.Section';
export default Section;
