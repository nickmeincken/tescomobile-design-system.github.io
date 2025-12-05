import { html } from "lit";
import { Card } from "../../molecules/Card/Card";

export interface PageProps {}

export const CardStrip = () => html`
  <div class="container three-col">
    ${Card({
      heading: 'Card Heading',
      content: 'lorem ipsum dolor',
      cardimg: 'https://placehold.co/400x300/WebP',
    })}
    ${Card({
      heading: 'Card Heading',
      content: 'lorem ipsum dolor',
      cardimg: 'https://placehold.co/400x300/WebP',
    })}
    ${Card({
      heading: 'Card Heading',
      content: 'lorem ipsum dolor',
      cardimg: 'https://placehold.co/400x300/WebP',
    })}
  </div>
`;
