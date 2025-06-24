import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
// import 'app/styles/index.scss'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { /*onClick: fn()*/ },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'PIU PIUPIU PIUPIU PIUPIU PIUPIU PIUPIU PIU',
    isOpen: true
  },
  decorators: [
    (Story) => (
      <div >
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    children: 'PIU PIUPIU PIUPIU PIUPIU PIUPIU PIUPIU PIU',
    isOpen: true
  },
  decorators: [
    (Story) => (
      <ThemeProvider >
        <div className={`app ${Theme.DARK}`}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};


