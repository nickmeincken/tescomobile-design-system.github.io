import type { Preview } from '@storybook/web-components-vite'
import '../src/assets/css/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Welcome to Tesco Mobile', 'Design System', ['Atoms', ['Intro'], 'Molecules', ['Intro', '*'], 'Organisms', ['Intro', '*'], 'Templates', ['Intro', '*'], 'Pages'], 'Changelog'],
        includeNames: 'true'
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
