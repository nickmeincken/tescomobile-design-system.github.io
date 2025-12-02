import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { PageProps } from './global-nav';
import { GlobalNav } from './global-nav';

const meta : Meta = {
  title: 'Design System/Organisms/Global Header',
  render: () => GlobalNav(),
  tags: ['autodocs'],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const GlobalNavigation: Story = {
    parameters: {
    docs: {
      description: {
        story: 'This is the global header. It is present on all pages.',
      },
    },
  },
};
