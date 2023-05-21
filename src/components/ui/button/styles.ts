import classnames, {
  backgroundColor,
  borderWidth,
  height,
  margin,
  padding,
  textColor,
  transitionDelay,
  transitionProperty,
  width,
  borderColor,
  borderRadius,
  boxShadow,
  boxShadowColor,
  textTransform,
} from '@root/tailwindcss-classnames';

export const accessButton = classnames(
  width('w-full'),
  height('h-[40px]'),
  borderRadius('rounded'),
  transitionProperty('transition-all'),
  transitionDelay('delay-100')
);

export const candidateButton = classnames(
  accessButton,
  textColor('text-white'),
  backgroundColor('bg-primary'),
  backgroundColor('hover:bg-primary-dark'),
  padding('px-2')
);

export const companyButton = classnames(
  accessButton,
  textColor('text-primary'),
  backgroundColor('bg-white'),
  textColor('hover:text-white'),
  backgroundColor('hover:bg-primary-dark'),
  borderColor('border-primary', 'hover:border-primary-dark'),
  borderWidth('border-1'),
  margin('mr-2'),
  padding('px-2')
);

export const searcherButton = classnames(
  accessButton,
  textColor('text-white'),
  backgroundColor('bg-accent'),
  backgroundColor('hover:bg-accent-dark'),
  borderColor('border-accent', 'hover:border-accent-dark'),
  boxShadow('shadow-lg'),
  boxShadowColor('shadow-gray-600'),
  textTransform('uppercase')
);
