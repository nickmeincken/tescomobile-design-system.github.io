import { html } from 'lit';
import { Legal } from './legal';
import { FooterLinks } from './footer-links';
import { FooterTopLinks } from './footer-top-links';

export interface PageProps {}

export const GlobalFoot = () => html`
  <footer class="global-footer">
    ${FooterTopLinks()}
    ${FooterLinks()}
    ${Legal()}
  </footer>
`;
