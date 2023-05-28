import classnames, {
  backgroundColor,
  display,
  flexGrow,
  height,
  width,
  alignItems,
  borderRadius,
  justifyContent,
  maxWidth,
  transitionDelay,
  transitionProperty,
} from '@root/tailwindcss-classnames';

export const headerContainer = classnames(
  backgroundColor('bg-transparent'),
  maxWidth('max-w-screen-xl'),
  width('w-full')
  // position('fixed')
);

export const flexContainer = classnames(display('flex'));

export const navSmallScreen = classnames(display('flex'), height('h-12'));

export const navWideScreen = classnames(
  display('flex'),
  justifyContent('justify-between'),
  height('h-20'),
  maxWidth('max-w-7xl')
);

export const logoContainer = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  flexGrow('grow')
);

export const hambuguerMenu = classnames(
  width('w-12'),
  height('h-12'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
);

export const itemList = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
);

export const button = classnames(
  width('w-full'),
  height('h-10'),
  borderRadius('rounded'),
  transitionProperty('transition-all'),
  transitionDelay('delay-100')
);
