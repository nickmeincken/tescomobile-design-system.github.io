import { html } from 'lit';
import { HelperNav } from './helper-nav';
import { Search } from './search';
import { PhoneSub } from './submenu/phone';
import { SimoSub } from './submenu/sim-only';
import { HelpSub } from './submenu/help';
import { BusinessSub } from './submenu/business';
import { WhySub } from './submenu/why-tm';

export const GlobalNav = () => html`
${HelperNav()}
<div class="global-nav-wrapper">
  <header class="global-nav">
    <a href="https://www.tescomobile.com/" class="logo" title="Tesco Mobile" aria-label="Store Logo">
      <svg><use xlink:href="/svg/sprite.svg#tescomobile-logo"></use></svg>
      <span>Tesco Mobile</span>
    </a>
    <nav>
      <ul>
        <li>
          <a href="#">Phones</a>
          ${PhoneSub()}
        </li>
        <li>
          <a href="#">SIM only</a>
          ${SimoSub()}
        </li>
        <li>
          <a href="#">Help</a>
          ${HelpSub()}
        </li>
        <li>
          <a href="#">Business</a>
          ${BusinessSub()}
        </li>
        <li>
          <a href="#">Why Tesco Mobile</a>
          ${WhySub()}
        </li>
      </ul>
    </nav>
    ${Search()}
  </header>
</div>
`;
