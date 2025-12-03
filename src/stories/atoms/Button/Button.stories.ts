import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const meta = {
  title: 'Design System/Atoms/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    hierachy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    cartIcon: {
      control: { type: 'select' },
      options: ['shopping-trolley', 'basket', 'upgrade', 'none'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const ButtonPrimary: Story = {
  args: {
    cart: false,
    icon: false,
    hierachy: 'primary',
    label: 'Button',
  },
};

export const ButtonSecondary: Story = {
  args: {
    cart: false,
    icon: false,
    hierachy: 'secondary',
    label: 'Button',
  },
};

export const ButtonTertiary: Story = {
  args: {
    cart: false,
    icon: false,
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const IconButton: Story = {
  args: {
    cart: false,
    icon: true,
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const LargeButton: Story = {
  args: {
    cart: false,
    icon: false,
    size: 'lg',
    label: 'Button',
  },
};

export const SmallButton: Story = {
  args: {
    cart: false,
    icon: false,
    size: 'sm',
    label: 'Button',
  },
};

export const CartButtonPrimary: Story = {
  args: {
    cart: true,
    hierachy: 'primary',
    cartIcon: 'basket',
    label: 'Button',
  },
};

export const CartButtonSecondary: Story = {
  args: {
    cart: true,
    hierachy: 'secondary',
    cartIcon: 'upgrade',
    label: 'Button',
  },
};

export const NoIcon: Story = {
  args: {
    cart: true,
    hierachy: 'secondary',
    label: 'Button',
  },
};

export const IconUpgrade: Story = {
  args: {
    cart: true,
    hierachy: 'secondary',
    cartIcon: 'upgrade',
    label: 'Upgrade to this phone',
  },
};

export const IconBasket: Story = {
  args: {
    cart: true,
    hierachy: 'primary',
    cartIcon: 'basket',
    label: 'Add to Basket',
  },
};

export const IconTrolley: Story = {
  args: {
    cart: true,
    hierachy: 'primary',
    cartIcon: 'shopping-trolley',
    label: 'Add to Basket',
  },
};
