import { header } from './header.ts';
import { banner } from './banner.ts';

export function render(root: HTMLElement): void {
  root.append(header(), banner());
}
