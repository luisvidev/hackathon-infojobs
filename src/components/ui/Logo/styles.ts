import classnames, {
  alignItems,
  display,
  justifyContent,
} from '@root/tailwindcss-classnames';

export const logoContainer = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
);
