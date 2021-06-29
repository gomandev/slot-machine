import React from 'react';

import { Story, Meta } from '@storybook/react';

import { LineComponent, LineInterface } from 'modules/atoms/line';

export default {
  title: 'Atoms/Line',
  component: LineComponent,
  args: {
    width: 'full',
    height: 12,
    background: 'primary',
  },
} as Meta;

const Template: Story<LineInterface> = args => <LineComponent {...args} />;

export const Line = Template.bind({});
Line.args = {
  width: 'full',
  height: 12,
  background: 'primary',
};
