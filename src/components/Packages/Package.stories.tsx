import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  PackageCard  from './PackageCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Package',
  component: PackageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
} as ComponentMeta<typeof PackageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PackageCard> = (args) => <PackageCard {...args} />;

export const CardPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardPage.args = {
  productImage: 'https://source.unsplash.com/featured/?mountains',
  productTitle: 'A new trail you cant miss',
  productSubDetail: 'New Description is so good',
  productButtonLabel:'More Action'
};


