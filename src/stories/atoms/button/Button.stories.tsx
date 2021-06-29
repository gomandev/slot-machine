import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from 'modules/atoms/button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { Control: 'Variant' },
    onclick: () => {},
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Click Me</Button>;

export const FillPrimary = Template.bind({});
FillPrimary.args = {
  variant: 'fill-primary',
  onClick: () => {},
};

export const FillSecondary = Template.bind({});
FillSecondary.args = {
  variant: 'fill-secondary',
  onClick: () => {},
};

export const FillAccent = Template.bind({});
FillAccent.args = {
  variant: 'fill-accent',
  onClick: () => {},
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined-primary',
  onClick: () => {},
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  variant: 'outlined-secondary',
  onClick: () => {},
};

export const OutlinedAccent = Template.bind({});
OutlinedAccent.args = {
  variant: 'outlined-accent',
  onClick: () => {},
};
