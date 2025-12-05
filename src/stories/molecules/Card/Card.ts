import { html } from 'lit';
import { Button } from '../../atoms/Button/Button';

export interface CardProps {
  heading?: string;
  content?: string;
  cardimg?: string;
}

export const Card = ({
  heading,
  content,
  cardimg
}: CardProps) => html`
  <div class="card">
    <img alt="A description of the image." loading="lazy" decoding="async" src=${cardimg || "https://placehold.co/400x300/WebP"}>
    <div class="content">
      <h2>${heading}</h2>
      <p>${content}</p>
      ${Button({
        hierachy: 'primary',
        size: 'md',
        label: 'Button'
      })}
    </div>
  </div>
`;
