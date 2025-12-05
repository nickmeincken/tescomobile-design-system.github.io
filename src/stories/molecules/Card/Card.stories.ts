import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { CardProps } from './Card';
import { Card } from './Card';

const meta : Meta = {
  title: 'Design System/Molecules/Card',
  render: (args) => Card(args),
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    },
    cardimg: {
      control: { type: 'text' }
    },
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const DefaultCard: Story = {
  args: {
    heading: 'Card Heading',
    content: 'lorem ipsum dolor',
    cardimg: 'https://placehold.co/400x300/WebP',
  }
};
