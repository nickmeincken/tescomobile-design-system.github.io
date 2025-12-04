import type { Preview } from '@storybook/web-components-vite'
import '../src/assets/css/global.css'
import '../src/assets/css/sb-styles.css'

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
        order: ['Welcome to Tesco Mobile', 'Design System', ['Atoms', ['Intro', 'Tokens'], 'Molecules', ['Intro', '*'], 'Organisms', ['Intro', '*'], 'Templates', ['Intro', '*'], 'Pages'], 'Changelog'],
        includeNames: 'true'
      }
    },
    docs: {
      controls: {
        sort: 'requiredFirst' // for docs
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
