import classnames, {
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  margin,
  padding,
  textColor,
  gap,
  alignItems,
  flexBasis,
  height,
} from '@root/tailwindcss-classnames';

export const searcherContainer = classnames(
  padding('p-8'),
  backgroundColor('bg-primary-panel'),
  display('flex'),
  flexDirection('flex-col', 'sm:flex-row'),
  alignItems('sm:items-end'),
  gap('gap-3'),
  borderRadius('rounded-md')
);

export const searcherSubContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  flexBasis('sm:basis-3/4')
);

export const searcherSubContainer2 = classnames(flexBasis('sm:basis-1/4'));

export const searchOffersLabel = classnames(
  textColor('text-white'),
  margin('mb-1')
);

export const searchOffersInput = classnames(
  padding('py-1', 'px-2'),
  borderRadius('rounded'),
  height('h-10')
);
