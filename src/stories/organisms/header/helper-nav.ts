import { html } from 'lit';

export const HelperNav = () => html`
<div class="utility-header-wrapper">
  <header class="utility-header">
    <nav class="store-switcher">
      <ul>
        <li class="active">
          <a href="/" id="personal-link-carehub">Personal</a>
        </li>
        <li>
          <a href="/business" id="business-link-carehub">Business</a>
        </li>
      </ul>
    </nav>
    <!-- added a navigation class and data-action attribute-->
    <nav data-action="navigation">
      <!-- initializing the JS component "menu" -->
      <ul role="menu" tabindex="0" aria-activedescendant="ui-id-4">
        <li>
          <a href="https://stores.tescomobile.com/" data-menu="menu-72" tabindex="-1" role="menuitem">
            Store locator
          </a>
        </li>
        <li>
          <a href="/coverage-checker" data-menu="menu-57" tabindex="-1" role="menuitem">
            Coverage checker
          </a>
        </li>
        <li>
          <a href="/status-checker" data-menu="menu-75" tabindex="-1" role="menuitem">
            Status checker
          </a>
        </li>
      </ul>
      <div class="top-links top-left-links__mobile-bg"></div>
    </nav>
    <nav class="utility-header-right">
      <ul>
        <li>
          <a href="https://www.tescomobile.com/customer/account/" id="idGwy9Vti2"></a>
        </li>
        <li class="link wishlist" data-bind="scope: 'wishlist'">
          <a href="https://www.tescomobile.com/wishlist/">
            My Wish List <!-- ko if: wishlist().counter --><!-- /ko -->
          </a>
        </li>
        <li class="link authorization-link placeholder">
          <a href="https://www.tescomobile.com/customer/account/login/">
            Log in
          </a>
        </li>
        <!-- ko scope: 'tm-customer-auth' -->
        <!-- ko template: { name: authLinkTemplate } -->
        <!-- ko if: isCustomerDataLoaded -->
        <!-- /ko -->
        <!-- /ko -->
        <!-- /ko -->
        <!-- ko scope: 'tm-customer-auth' -->
        <!-- ko template: { name: welcomeTemplate } -->
        <!-- ko if: isCustomerDataLoaded -->
        <!-- /ko -->
        <!-- /ko -->
        <!-- /ko -->
      </ul>
    </nav>
  </header>
</div>
<a class="action skip contentarea visually-hidden" href="#contentarea">
  <span>
    Skip to Content
  </span>
</a>
`;
