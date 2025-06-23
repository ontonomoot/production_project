import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
// import 'app/styles/index.scss'

const meta = {
  title: 'shared/Button',
  component: Button,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
  decorators: [
    (Story) => (
      <div >
        <Story />
      </div>
    ),
  ],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
  },
};
export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
};
export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
};
