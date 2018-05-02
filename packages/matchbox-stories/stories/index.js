import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Button } from '@sparkpost/matchbox';
import { Language } from '@sparkpost/matchbox-icons';

import './index.css';

storiesOf('Button', module)
  .add('with text', withInfo()(() => (
    <Button flat><Language/></Button>
  )))
