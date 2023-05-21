import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  width,
} from '@root/tailwindcss-classnames';

export const mainLayoutContainer = classnames(
  width('w-full'),
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center')
);

export const mainLayoutSubContainer = classnames(
  width('w-full'),
  maxWidth('max-w-7xl'),
  margin('mx-4')
);
