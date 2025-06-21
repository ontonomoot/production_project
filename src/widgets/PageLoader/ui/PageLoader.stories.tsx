import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta = {
  title: 'shared/Loader',
  component: PageLoader,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
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
