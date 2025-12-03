import { html } from 'lit';

export const MobileNav = () => html`
<nav class="mobile-nav">
  <a href="#">
    <svg class="close"><use xlink:href="./svg/sprite.svg#close"></use></svg>
    <svg class="searchOpen"><use xlink:href="./svg/sprite.svg#search"></use></svg>
  </a>
  <a href="#">
    <svg><use xlink:href="./svg/sprite.svg#account"></use></svg>
  </a>
  <a href="#">
    <svg><use xlink:href="./svg/sprite.svg#basket"></use></svg>
  </a>
  <a href="#" class="menu">
    <svg><use xlink:href="./svg/sprite.svg#menu"></use></svg>
    Menu
  </a>
</nav>
`;
