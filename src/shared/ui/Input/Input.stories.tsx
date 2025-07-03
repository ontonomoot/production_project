import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import { Input } from './Input';
import { Theme } from 'app/providers/ThemeProvider';
// import 'app/styles/index.scss'

const meta = {
  title: 'shared/Input',
  component: Input,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Text',
    value: '123123'
  },
  decorators: [
    (Story) => (
      <div >
        <Story />
      </div>
    ),
  ],
};
