import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { JumbotronProps } from './Jumbotron';
import { Jumbotron } from './Jumbotron';

const meta : Meta = {
  title: 'Design System/Molecules/Jumbotron',
  render: (args) => Jumbotron(args),
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
    desktopImg: {
      control: { type: 'text' },
    },
    mobileImg: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Hero is for the heading of the page, this is to draw in your customers',
      },
    },
  },
} satisfies Meta<JumbotronProps>;

export default meta;
type Story = StoryObj<JumbotronProps>;

export const TopLeft: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'left',
    contentY: 'top',
  }
};

export const TopCenter: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'center',
    contentY: 'top',
  }
};

export const TopRight: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'right',
    contentY: 'top',
  }
};

export const CenterLeft: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'left',
    contentY: 'middle',
  }
};

export const CenterMiddle: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'center',
    contentY: 'middle',
  }
};

export const CenterRight: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'right',
    contentY: 'middle',
  }
};

export const BottomLeft: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'left',
    contentY: 'bottom',
  }
};

export const BottomCenter: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'center',
    contentY: 'bottom',
  }
};

export const BottomRight: Story = {
  args: {
    desktopImg: 'https://placehold.co/1280x430/WebP',
    mobileImg: 'https://placehold.co/366x529/WebP',
    title: 'Hero Title',
    subtitle: 'This is the hero description',
    contentX: 'right',
    contentY: 'bottom',
  }
};
