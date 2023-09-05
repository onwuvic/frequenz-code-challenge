export function abbrNumber(number) {
  return new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(Number(number));
}
