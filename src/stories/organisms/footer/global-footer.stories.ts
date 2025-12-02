import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { PageProps } from './global-footer';
import { GlobalFoot } from './global-footer';

const meta : Meta = {
  title: 'Design System/Organisms/Global Footer',
  render: () => GlobalFoot(),
  tags: ['autodocs'],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const GlobalFooter: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the global footer. It is present on all pages.',
      },
    },
  },
};
