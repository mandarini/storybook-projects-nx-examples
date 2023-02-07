import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FiveComponent } from './five.component';

export default {
  title: 'FiveComponent',
  component: FiveComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FiveComponent>;

const Template: Story<FiveComponent> = (args: FiveComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
