import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  PackageDetail  from './PackageDetail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/PackageDetail',
  component: PackageDetail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PackageDetail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PackageDetail> = (args) => <PackageDetail {...args} />;

export const CardPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardPage.args = {
  productImage: 'https://source.unsplash.com/featured/?mountains',
  productTitle: 'A new trail you cant miss',
  productSubDetail: 'New Description is so good',
  productDescription:'Sky shows the Bundesliga live and in HD - linearly and in a live stream . On Sky you can see all Saturday games including the tipico top game of the week as well as matches in the English weeks, i.e. on Tuesday and Wednesday. Sky also shows parallel games in the conference call. You can see summaries of all games in "All games, all goals". And with Sky Ticket in Germany or Sky X in Austria, you can be there flexibly, even without a long contract. With the match day ticket from Sky Select you can also be there live without a package.'
};


