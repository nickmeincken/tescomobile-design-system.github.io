import { html } from 'lit';
import { HeroImage } from '../../molecules/hero-image/HeroImage';
import { GlobalNav } from '../../organisms/header/global-nav';
import { GlobalFoot } from '../../organisms/footer/global-footer';

export interface PageProps {}

export const Page = () => html`
  ${GlobalNav()}
  <main>
    ${HeroImage({
      title: 'Hero Title',
      subtitle: 'This is the hero description',
      contentX: "left",
      contentY: "top"
    })}
    <article>
    </article>
  </main>
  ${GlobalFoot()}
`;
