import { html } from 'lit';

export interface ButtonProps {
  hierachy?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  cart?: boolean;
  cartIcon?: 'shopping-trolley' | 'basket' | 'upgrade' | '';
  label: string;
  onClick?: () => void;
}
export const Button = ({ hierachy, icon, cart, cartIcon, size, label, onClick }: ButtonProps) => {
  const mode = hierachy;

  return html`
    <button
      type="button"
      class=${['btn', `btn-${size || 'md'}`, `${cart? 'tocart' : ''}`, `btn-${mode|| 'primary'}`].join(' ')}
      @click=${onClick}
    >
      ${
        (() => {
          if(cartIcon == 'upgrade') {
            return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#upgrade"></use></svg>`
          }
          if(cartIcon == 'basket') {
            return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#basket"></use></svg>`
          }
          if(cartIcon =='shopping-trolley') {
            return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#shopping-trolley"></use></svg>`
          } else {
            return html``
          }
        })()
      }
      ${label}
      ${
        (() => {
          if(icon == true) {
           return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#forward"></use></svg>`
          } else {
            return html``
          }
        })()
      }
    </button>
  `;
};
