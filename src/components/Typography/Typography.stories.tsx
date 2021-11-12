import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Typography from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const h1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h1.args = {
  variant: 'h1',
  label: 'sentence',
};

export const h2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h2.args = {
  variant: 'h2',
  label: 'sentence',
};

export const h3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h3.args = {
  variant: 'h3',
  label: 'sentence',
};

export const p = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
p.args = {
  variant: 'p',
  label: 'sentence',
};

