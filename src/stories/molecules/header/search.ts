import { html } from 'lit';

export const Search = () => html`
  <div id="algoliaAutocomplete" class="block block-search algolia-search-block algolia-search-input">
    <div class="aa-Autocomplete" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="autocomplete-0-label">
      <form class="aa-Form" action="" novalidate="" role="search">
        <div class="aa-InputWrapperPrefix">
          <label class="aa-Label" for="autocomplete-0-input" id="autocomplete-0-label">
            <button class="aa-SubmitButton" type="submit" title="Submit">
              <svg class="icon"><use xlink:href="./svg/sprite.svg#search"></use></svg>
            </button>
          </label>
          <div class="aa-LoadingIndicator" hidden="">
            <svg class="aa-LoadingIcon" viewBox="0 0 100 100" width="20" height="20">
              <circle cx="50" cy="50" fill="none" r="35" stroke="currentColor" stroke-dasharray="164.93361431346415 56.97787143782138" stroke-width="6">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;90 50 50;180 50 50;360 50 50" keyTimes="0;0.40;0.65;1"></animateTransform>
              </circle>
            </svg>
          </div>
        </div>
        <div class="aa-InputWrapper">
          <input class="aa-Input" aria-autocomplete="both" aria-labelledby="autocomplete-0-label" id="autocomplete-0-input" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" placeholder="Search phones, offers &amp; help" maxlength="512" type="search">
        </div>
        <div class="aa-InputWrapperSuffix">
          <button class="aa-ClearButton" type="reset" title="Clear" hidden="">
            <svg class="icon"><use xlink:href="./svg/sprite.svg#close"></use></svg>
          </button>
        </div>
      </form>
    </div>
  </div>
`;
