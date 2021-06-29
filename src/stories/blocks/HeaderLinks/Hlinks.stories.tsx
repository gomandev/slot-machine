import React from 'react';

import {Story, Meta} from '@storybook/react';

import {HeaderLinks, HeaderLinksProps} from "modules/blocks/HeaderLinks";


export default {
    title: "Blocks/Header-Links",
    component: HeaderLinks,
    argTypes: {
        linksColor: {control: "color"},
        linksSize: {control: "size"}

    }
}


const Template: Story<HeaderLinksProps> = (args) => <HeaderLinks {...args} />

export const Default = Template.bind({});


export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
    linksSize: "lg",
    linksColor: "primary"
}
