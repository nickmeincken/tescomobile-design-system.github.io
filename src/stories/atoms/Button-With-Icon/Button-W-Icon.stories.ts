import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { ButtonProps } from './Button-W-Icon';
import { Button } from './Button-W-Icon';

const meta = {
  title: 'Design System/Atoms/Button With Icon',
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

export const Primary: Story = {
  args: {
    hierachy: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    hierachy: 'secondary',
    label: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};
