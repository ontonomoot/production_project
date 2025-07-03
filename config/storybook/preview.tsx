import type { Preview } from '@storybook/react-webpack5'
import '../../src/app/styles/index.scss'
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { BrowserRouter } from 'react-router-dom';


const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className={Theme.LIGHT}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
