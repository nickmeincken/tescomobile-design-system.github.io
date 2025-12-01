import { html } from 'lit';

export interface ButtonProps {
  hierachy?: 'primary' | 'secondary';
  icon?: 'shopping-trolley' | 'basket' | 'upgrade' | '';
  label: string;
  onClick?: () => void;
}
export const Button = ({ hierachy, label, icon, onClick }: ButtonProps) => {
  const mode = hierachy;

  return html`
    <button
      type="button"
      class=${['btn', `btn-md`, `tocart`, `btn-${mode || 'primary'}`].join(' ')}
      @click=${onClick}
    >

      ${
        (() => {
          if(icon == 'upgrade') {
            return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#upgrade"></use></svg>`
          }
          if(icon == 'basket') {
            return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#basket"></use></svg>`
          }
          if(icon =='shopping-trolley') {
            return html`<svg class="icon"><use xlink:href="./svg/sprite.svg#shopping-trolley"></use></svg>`
          } else {
            return html``
          }
        })()
      }

      ${label}
    </button>
  `;
};
