import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
// import 'app/styles/index.scss'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof Sidebar>;

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
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
