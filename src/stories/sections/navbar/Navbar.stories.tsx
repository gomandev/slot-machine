import React from 'react';

import {Story, Meta} from '@storybook/react';

import {Navbar} from 'modules/sections/Navbar';


export default {
    title: "Sections/Navbar",
    component: Navbar,
    argTypes: {

    }
} as Meta; 


const Template: Story  = (args) => <Navbar {...args} />;


export const Header  = Template.bind({});