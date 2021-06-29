import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Chip, ChipPropsInterface } from 'modules/atoms/chip';

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipPropsInterface> = args => <Chip {...args} />;

export const Chips = () => {
  return (
    <div className="flex flex-row">
      <Chip rndColors={1} content="Chip" />
      <Chip rndColors={2} content="Chip" />
      <Chip rndColors={3} content="Chip" />
      <Chip rndColors={4} content="Chip" />
    </div>
  );
};
