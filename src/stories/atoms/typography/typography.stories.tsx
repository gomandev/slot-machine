import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Typography, GenericTypographyProps } from 'modules/atoms/typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argsType: {
    variant: { control: 'variant' },
  },
} as Meta;

const Template: Story<GenericTypographyProps> = args => (
  <Typography {...args}>Typography</Typography>
);

export const AllTyponography = () => {
  return (
    <>
      <Typography variant="h1" color="white">
        Heading 1
      </Typography>
      <Typography variant="h2" color="white">
        Heading 2
      </Typography>
      <Typography variant="h3" color="white">
        Heading 3
      </Typography>
      <Typography variant="h4" color="white">
        Heading 4
      </Typography>
      <Typography variant="h5" color="white">
        Heading 5
      </Typography>
      <Typography variant="paragraph" color="white">
        Paragraph
      </Typography>
    </>
  );
};

export const Heading1 = Template.bind({});
Heading1.args = {
  color: 'primary',
  variant: 'h1',
};
export const Heading2 = Template.bind({});
Heading2.args = {
  color: 'primary',
  variant: 'h2',
};
export const Heading3 = Template.bind({});
Heading3.args = {
  color: 'primary',
  variant: 'h3',
};
export const Heading4 = Template.bind({});
Heading4.args = {
  color: 'primary',
  variant: 'h4',
};
export const Heading5 = Template.bind({});
Heading5.args = {
  color: 'primary',
  variant: 'h5',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  color: 'primary',
  variant: 'paragraph',
};
