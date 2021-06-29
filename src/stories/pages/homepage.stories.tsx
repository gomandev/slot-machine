import React from 'react';

import  { Story, Meta} from '@storybook/react';


import Homepage from 'pages/index';

export default {
    title: "Pages/Homepage", 
    component: Homepage
} as Meta;


const Template: Story  = (args) => <Homepage {...args} />;

export const Main  = Template.bind({});