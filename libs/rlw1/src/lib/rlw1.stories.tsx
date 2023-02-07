import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rlw1 } from './rlw1';

const Story: ComponentMeta<typeof Rlw1> = {
  component: Rlw1,
  title: 'Rlw1',
};
export default Story;

const Template: ComponentStory<typeof Rlw1> = (args) => <Rlw1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
