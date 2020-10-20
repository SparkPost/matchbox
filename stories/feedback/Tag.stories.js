import React from 'react';

import { Inline, Tag } from '@sparkpost/matchbox';
import { Language } from '@sparkpost/matchbox-icons';

export default {
  title: 'Feedback/Tag',
};

export const TagWithRemove = () => (
  <Tag onRemove={() => console.log('Tag Remove')} className="test-class">
    domain.com
    <Language />
  </Tag>
);

export const Colors = () => (
  <Inline space="100">
    <Tag onRemove={() => console.log('Tag Remove')} color="orange">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="blue">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="navy">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="yellow">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="green">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="red">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="magenta">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="purple">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="teal">
      domain.com
    </Tag>
    <Tag onRemove={() => console.log('Tag Remove')} color="darkGray">
      domain.com
    </Tag>
    <Tag>domain.com</Tag>
  </Inline>
);

export const SystemProps = () => (
  <Inline space="100">
    <Tag mr="800">domain.com</Tag>
    <Tag my={['500', '700', '300']}>domain.com</Tag>
  </Inline>
);
