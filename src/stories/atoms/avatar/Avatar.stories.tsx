import React from 'react';

import {Story, Meta} from '@storybook/react';

import {AvatarComponent, AvatarProps} from 'modules/atoms/avatar';

export default {
    title: "Atoms/Avatar",
    size: {control: "Avatar Size", },
    component: AvatarComponent
} as Meta;

const Template: Story<AvatarProps> = (args) => <AvatarComponent {...args}/>;

export const Avatar = Template.bind({});
Avatar.args  = {
    img: "https://pbs.twimg.com/profile_images/1358398740806201345/EicTmyL6_normal.jpg",
    imgAlt: "Suraj Auwal", 
    size: "mobile"
};
