import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import <%= name %> from './<%= name %>';

storiesOf('Components/<%= name %>', module)
  .addDecorator(withKnobs)
  .add('<%= name %>', () => (
    <div narrow>
      <<%= name %> />
    </div>
  ));
