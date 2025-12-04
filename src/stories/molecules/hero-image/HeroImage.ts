import { html } from 'lit';

export interface HeroProps {
  contentY?: 'top' | 'middle' | 'bottom';
  contentX?: 'left' | 'center' | 'right';
  title?: 'Hero Title';
  subtitle?: 'This is the hero description';
}

export const HeroImage = ({contentX, contentY, title, subtitle}: HeroProps) => html`
  <header class=${['hero-image', `hero-${contentX || 'left'}`, `hero-${contentY || 'bottom'}`].join(' ')}>
    <img src="https://placehold.co/1280x430/WebP" />
    <div class="content">
      <h2>${title}</h2>
      <p>${subtitle}</p>
    </div>
  </header>
`;
