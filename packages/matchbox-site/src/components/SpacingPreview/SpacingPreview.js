import React from 'react';
import tokens from '@sparkpost/design-tokens/dist/index.meta.json';
import _ from 'lodash';
import styles from './SpacingPreview.module.scss';

const spacingScale = _.filter(tokens, ({ name, value, category }) => !name.includes('base') && category === 'spacing' && value !== '0rem').reverse();

function SpacingPreview() {
  return (
    <div className={styles.SpacingPreview}>
      {_.map(spacingScale, ((spc) => (
        <div key={spc.pixel_value} className={styles.Space}>
          <div style={{ width: spc.pixel_value }}></div>
          <p>{spc.pixel_value}</p>
        </div>
      )))}
    </div>
  );
}

export default SpacingPreview;
