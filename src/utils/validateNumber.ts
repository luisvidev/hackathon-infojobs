export function validateNumber(_str: string) {
  const str = parseInt(_str);
  if (isNaN(str)) {
    throw new Error('Invalid number');
  }
  return Number(str);
}
