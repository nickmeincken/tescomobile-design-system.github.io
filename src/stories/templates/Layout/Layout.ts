import { html } from 'lit';
import { HeroImage } from '../../molecules/HeroImage';
import { GlobalNav } from '../../organisms/header/global-nav';
import { GlobalFoot } from '../../organisms/footer/global-footer';

export interface PageProps {}

export const Page = () => html`
  ${GlobalNav()}
  <main>
    ${HeroImage()}
    <article>
    </article>
  </main>
  ${GlobalFoot()}
`;
