import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/Applink',
  component: AppLink,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    to: '/'
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Link',
    theme: AppLinkTheme.PRIMARY
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Link',
    theme: AppLinkTheme.SECONDARY
  },
};

export const Other: Story = {
  args: {
    children: 'Other Link',
    theme: AppLinkTheme.OTHER
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary Link',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary Link',
    theme: AppLinkTheme.SECONDARY
  },
    decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
 ],
};

export const OtherDark: Story = {
  args: {
    children: 'Other Link',
    theme: AppLinkTheme.OTHER
  },
    decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
