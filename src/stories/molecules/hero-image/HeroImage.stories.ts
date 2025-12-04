import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { HeroProps } from './HeroImage';
import { HeroImage } from './HeroImage';

const meta : Meta = {
  title: 'Design System/Molecules/Hero Image',
  render: (args) => HeroImage(args),
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {type: 'text'}
    },
    subtitle: {
      control: {type: 'text'}
    },
    contentX: {
      control: { type: 'select' },
      options: [ 'left', 'center', 'right' ],
    },
    contentY: {
      control: { type: 'select' },
      options: [ 'top', 'middle', 'bottom' ],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Hero is for the heading of the page, this is to draw in your customers',
      },
    },
  },
} satisfies Meta<HeroProps>;

export default meta;
type Story = StoryObj<HeroProps>;

export const HeroTopLeft: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'left',
    contentY: 'top',
  }
};

export const HeroTopCenter: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'center',
    contentY: 'top',
  }
};

export const HeroTopRight: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'right',
    contentY: 'top',
  }
};

export const HeroCenterLeft: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'left',
    contentY: 'middle',
  }
};

export const HeroCenterMiddle: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'center',
    contentY: 'middle',
  }
};

export const HeroCenterRight: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'right',
    contentY: 'middle',
  }
};

export const HeroBottomLeft: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'left',
    contentY: 'bottom',
  }
};

export const HeroBottomCenter: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'center',
    contentY: 'bottom',
  }
};

export const HeroBottomRight: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'right',
    contentY: 'bottom',
  }
};
