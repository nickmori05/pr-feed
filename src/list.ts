export function list(items: string[]): HTMLElement {
  const el = document.createElement('ul');
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    el.append(li);
  }
  return el;
}
