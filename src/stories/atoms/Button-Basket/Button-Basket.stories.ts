import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { ButtonProps } from './Button-Basket';
import { Button } from './Button-Basket';

const meta = {
  title: 'Design System/Atoms/Button Basket',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    hierachy: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    icon: {
      control: { type: 'select' },
      options: ['shopping-trolley', 'basket', 'upgrade', 'none'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    hierachy: 'primary',
    icon: 'basket',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    hierachy: 'secondary',
    icon: 'upgrade',
    label: 'Button',
  },
};

export const NoIcon: Story = {
  args: {
    hierachy: 'secondary',
    label: 'Button',
  },
};

export const Upgrade: Story = {
  args: {
    hierachy: 'secondary',
    icon: 'upgrade',
    label: 'Upgrade',
  },
};

export const Basket: Story = {
  args: {
    hierachy: 'primary',
    icon: 'basket',
    label: 'Add to Basket',
  },
};

export const Trolley: Story = {
  args: {
    hierachy: 'primary',
    icon: 'shopping-trolley',
    label: 'Add to Basket',
  },
};
