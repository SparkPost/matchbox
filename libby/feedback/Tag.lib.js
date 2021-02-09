import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Inline, Tag } from '@sparkpost/matchbox';
import { Language } from '@sparkpost/matchbox-icons';

function noop() {}

describe('Tag', () => {
  add('with remove', () => (
    <Tag onRemove={noop} className="test-class">
      domain.com
      <Language />
    </Tag>
  ));
  add('colors', () => (
    <Inline space="100">
      <Tag onRemove={noop} color="orange">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="blue">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="navy">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="yellow">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="green">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="red">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="magenta">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="purple">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="teal">
        domain.com
      </Tag>
      <Tag onRemove={noop} color="darkGray">
        domain.com
      </Tag>
      <Tag>domain.com</Tag>
    </Inline>
  ));

  add('works with system props', () => (
    <Inline space="100">
      <Tag mr="800">domain.com</Tag>
      <Tag my={['500', '700', '300']}>domain.com</Tag>
    </Inline>
  ));
});
