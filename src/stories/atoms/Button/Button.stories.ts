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
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const ButtonPrimary: Story = {
  args: {
    icon: false,
    hierachy: 'primary',
    label: 'Button',
  },
};

export const ButtonSecondary: Story = {
  args: {
    icon: false,
    hierachy: 'secondary',
    label: 'Button',
  },
};

export const ButtonTertiary: Story = {
  args: {
    icon: false,
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const IconButton: Story = {
  args: {
    icon: true,
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const LargeButton: Story = {
  args: {
    icon: false,
    size: 'lg',
    label: 'Button',
  },
};

export const SmallButton: Story = {
  args: {
    icon: false,
    size: 'sm',
    label: 'Button',
  },
};
