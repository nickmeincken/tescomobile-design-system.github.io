import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { PageProps } from './CardStrip';
import { CardStrip } from './CardStrip';


const meta : Meta = {
  title: 'Design System/Organisms/Card Strip',
  render: () => CardStrip(),
  tags: ['autodocs'],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const Card: Story = {};
