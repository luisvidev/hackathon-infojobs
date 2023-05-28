export const getBadgeColor = (n: number) => {
  if (n >= 80) return 'green';
  if (n > 80 && n >= 60) return 'lime';
  if (n > 60 && n >= 40) return 'yellow';
  if (n > 40 && n >= 20) return 'orange';
  if (n < 20) return 'red';
};
