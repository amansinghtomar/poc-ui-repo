import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ProductImage from './ProductImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Image',
  component: ProductImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ProductImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductImage> = (args) => <ProductImage {...args} />;

export const withImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withImage.args = {
  img: '',
  width: 100,
  height:100
};

