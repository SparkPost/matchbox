import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import './scss.scss';

describe('Visual Regression', () => {
  add('SCSS Tokens', () => (
    <div
      className="green"
      style={{
        padding: '2rem',
      }}
    >
      This should be a green background
      <div className="white">This should be a white background</div>
    </div>
  ));
});
