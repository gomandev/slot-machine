import React from 'react'; 

import {Story, Meta} from '@storybook/react';

import {AboutCard, AboutCardInterface} from 'modules/blocks/cards'


export default  {
    title: "Blocks/Cards/About", 
    component: AboutCard,
    argTypes: {
        cardHeader: {control: "Text"},
    }
} as Meta;


const Template: Story<AboutCardInterface> = (args) => (<AboutCard {...args}>Hi! My name is Suraj and i am a  Javascript developer and content creator. I am on a mission to make tech and the web accessible to everyone from any background.</AboutCard>)

export const Main  = Template.bind({});

Main.args = {
    cardHeading: "Suraj Auwal"
}

