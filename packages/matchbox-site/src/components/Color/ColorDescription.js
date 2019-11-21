import React from 'react';
import Token from '../tokens/Token';
import { meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import styles from './ColorDescription.module.scss';

function ColorDescription(props) {
  const color = _.find(meta, ['name', props.name]);

  return (
    <div className={styles.Wrapper}>
      <div style={{ background: color.value }} className={styles.Color}>
        {color.friendly.replace('Base', '').replace('Color', '').trim()}
      </div>
      <div className={styles.Description}>
        <div>{props.children}</div>
        {props.alternative && (
          <div>Altenative: <Token name={props.alternative}/></div>
        )}
      </div>
    </div>
  );
}

export default ColorDescription;
