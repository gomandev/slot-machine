import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Link, LinkProps } from 'modules/atoms/Link';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    variant: { control: 'color' },
    onclick:  ()  => "Hello"
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args}>Click Me </Link>;

export const Primary = Template.bind({});
Primary.args = {
  to: '/home',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  to: '/home',
  variant: 'secondary',
};

export const Dark = Template.bind({});
Dark.args = {
  to: '/home',
  variant: 'white',
};

export const White = Template.bind({});
White.args = {
  to: '/home',
  variant: 'dark',
};
