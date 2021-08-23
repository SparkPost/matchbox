import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Pagination } from '@sparkpost/matchbox';

describe('Pagination', () => {
  add('with no margins', () => (
    <div data-id="pagination-no-margin">
      <Pagination mb={400} pages={8} pageRange={3} marginsHidden />
    </div>
  ));

  add('with lots of pages', () => (
    <div data-id="pagination-lots-of-pages">
      <Pagination mb={400} pages={30} pageRange={7} />
    </div>
  ));

  add('with system props', () => (
    <div data-id="pagination-system-props">
      <div>
        <Pagination mb={600} pages={30} pageRange={7} />
      </div>
      <div>
        <Pagination mb={400} pages={30} pageRange={7} />
      </div>
      <div>
        <Pagination mb={200} pages={30} pageRange={7} />
      </div>
    </div>
  ));
});
