import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Pagination } from '@sparkpost/matchbox';

export default {
  title: 'Navigation|Pagination',
};

export const WithNoMargins = withInfo()(() => (
  <div data-id="pagination-no-margin">
    <Pagination mb={400} pages={8} pageRange={3} marginsHidden onChange={action('Page Changed')} />
  </div>
));

export const WithLotsOfPages = withInfo()(() => (
  <div data-id="pagination-lots-of-pages">
    <Pagination mb={400} pages={30} pageRange={7} onChange={action('Page Changed')} />
  </div>
));

export const WithSystemProps = withInfo()(() => (
  <div data-id="pagination-system-props">
    <div>
      <Pagination mb={600} pages={30} pageRange={7} onChange={action('Page Changed')} />
    </div>
    <div>
      <Pagination mb={400} pages={30} pageRange={7} onChange={action('Page Changed')} />
    </div>
    <div>
      <Pagination mb={200} pages={30} pageRange={7} onChange={action('Page Changed')} />
    </div>
  </div>
));
