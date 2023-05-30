export const formatTimestamp = (
  timestamp: number | string,
  format?: 'short' | 'medium' | 'long'
): string => {
  const date = new Date(timestamp);
  let options = {};

  if (format === 'short') {
    options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
  } else if (format === 'medium') {
    options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
  } else if (format === 'long') {
    options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
  } else {
    options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
  }
  return date.toLocaleString('es-ES', options);
};
