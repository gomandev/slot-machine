import React from 'react';

import { Story, Meta } from '@storybook/react';

import {
  GeneralArticleInterface,
  GeneralArticle,
} from 'modules/blocks/cards/Articles/GeneralArticle';

export default {
  title: 'Blocks/Cards/General-Article',
  component: GeneralArticle,
} as Meta;

const Template: Story<GeneralArticleInterface> = args => (
  <GeneralArticle {...args} />
);

export const General = Template.bind({});
