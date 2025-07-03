import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={Theme.DARK}>
        <Story />
      </div>
    ),
  ],
};
