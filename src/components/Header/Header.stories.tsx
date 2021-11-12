import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  HeaderTab  from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: HeaderTab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof HeaderTab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderTab> = (args) => <HeaderTab {...args} />;

export const NamedHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NamedHeader.args = {
 name:'POC'
};

