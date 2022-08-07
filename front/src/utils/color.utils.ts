// based on https://stackoverflow.com/a/41042412
export function fontColorForBackground(bgColorCode: string) {
  const r = Number.parseInt(bgColorCode.substr(1, 2), 16);
  const g = Number.parseInt(bgColorCode.substr(3, 2), 16);
  const b = Number.parseInt(bgColorCode.substr(5, 2), 16);

  const a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return a < 0.5 ? '#333' : '#fff';
}
