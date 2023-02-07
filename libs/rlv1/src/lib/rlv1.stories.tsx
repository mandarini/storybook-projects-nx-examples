import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rlv1 } from './rlv1';

const Story: ComponentMeta<typeof Rlv1> = {
  component: Rlv1,
  title: 'Rlv1',
};
export default Story;

const Template: ComponentStory<typeof Rlv1> = (args) => <Rlv1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
