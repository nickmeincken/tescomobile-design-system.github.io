import { html } from 'lit';

export interface ButtonProps {
  hierachy?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  label: string;
  onClick?: () => void;
}
export const Button = ({ hierachy, icon, size, label, onClick }: ButtonProps) => {
  const mode = hierachy;

  return html`
    <button
      type="button"
      class=${['btn', `btn-${size || 'md'}`, `btn-${mode|| 'primary'}`].join(' ')}
      @click=${onClick}
    >
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
