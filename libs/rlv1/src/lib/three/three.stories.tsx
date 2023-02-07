import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Three } from './three';

const Story: ComponentMeta<typeof Three> = {
  component: Three,
  title: 'Three',
};
export default Story;

const Template: ComponentStory<typeof Three> = (args) => <Three {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
