import { html } from 'lit';
import { Jumbotron } from '../../molecules/Jumbotron/Jumbotron';
import { GlobalNav } from '../../organisms/header/global-nav';
import { GlobalFoot } from '../../organisms/footer/global-footer';
import { CardStrip } from '../../organisms/CardStrip/CardStrip';

export interface PageProps {}

export const Page = () => html`
  ${GlobalNav()}
  <main>
    ${Jumbotron({
      desktopImg: 'https://placehold.co/1280x430/WebP',
      mobileImg: 'https://placehold.co/366x529/WebP',
      title: 'Hero Title',
      subtitle: 'This is the hero description',
      contentX: "left",
      contentY: "top"
    })}
    ${CardStrip()}
  </main>
  ${GlobalFoot()}
`;
