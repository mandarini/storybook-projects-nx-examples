import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Six } from './six';

const Story: ComponentMeta<typeof Six> = {
  component: Six,
  title: 'Six',
};
export default Story;

const Template: ComponentStory<typeof Six> = (args) => <Six {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
