import classnames, {
  backdropBlur,
  backgroundColor,
  display,
  flexDirection,
  fontWeight,
  gap,
  height,
  inset,
  justifyContent,
  padding,
  position,
  transitionDelay,
  transitionProperty,
  width,
  zIndex,
  borderRadius,
} from '@root/tailwindcss-classnames';

export const mobileMenuContainer = classnames(
  position('fixed'),
  // backgroundColor('bg-gray-900/[.6]' ),
  backdropBlur('backdrop-blur-sm'),
  zIndex('z-10'),
  inset('top-0'),
  inset('left-0'),
  inset('right-0'),
  inset('bottom-0')
);

export const subMobileMenuContainer = classnames(
  position('absolute'),
  backgroundColor('bg-white'),
  height('h-screen'),
  width('w-64'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-between')
);

export const linksList = classnames(padding('pt-8'));

export const links = classnames(
  padding('py-2', 'px-2'),
  fontWeight('font-semibold')
);

export const buttonContainer = classnames(
  padding('p-2'),
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-1')
);

export const button = classnames(
  width('w-full'),
  height('h-10'),
  borderRadius('rounded'),
  transitionProperty('transition-all'),
  transitionDelay('delay-100')
);
