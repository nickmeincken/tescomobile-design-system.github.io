import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { PageProps } from '../templates/Layout/Layout';
import { Page } from '../templates/Layout/Layout';

const meta : Meta = {
  title: 'Design System/Pages/Homepage',
  render: () => Page(),
  tags: ['autodocs'],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const HomePage: Story = {};
