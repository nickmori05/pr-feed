import { header } from './header.ts';
import { banner } from './banner.ts';
import { list } from './list.ts';

export function render(root: HTMLElement): void {
  root.append(header(), banner(), list(['One', 'Two', 'Three']));
}
