import { header } from './header.ts';

export function render(root: HTMLElement): void {
  root.append(header());
}
