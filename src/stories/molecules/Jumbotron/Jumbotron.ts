import { html } from 'lit';

export interface JumbotronProps {
  contentY?: 'top' | 'middle' | 'bottom';
  contentX?: 'left' | 'center' | 'right';
  title?: 'Hero Title';
  subtitle?: 'This is the hero description';
  desktopImg?: 'https://placehold.co/1280x430/WebP';
  mobileImg?: string;
}

export const Jumbotron = ({
  contentX,
  contentY,
  title,
  subtitle,
  desktopImg,
  mobileImg
}: JumbotronProps) => html`
  <header class=${['jumbotron', 'lefttoright-gradient', `jumbotron-${contentX || 'left'}`, `jumbotron-${contentY || 'bottom'}`].join(' ')}>
  <picture>
    <source srcset="${desktopImg}" media="(min-width: 768px)" />
    <img src="${mobileImg || "https://placehold.co/366x529/WebP"}" alt="A description of the image." loading="lazy" decoding="async">
  </picture>
    <div class="content">
      <h2 class="display-1">
        ${title}
        <small>${subtitle}</small>
      </h2>
    </div>
  </header>
`;
