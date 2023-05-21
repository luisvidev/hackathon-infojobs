import classnames, {
  backgroundColor,
  borderRadius,
  cursor,
  display,
  flexDirection,
  gap,
  height,
  width,
} from '@root/tailwindcss-classnames';

export const offerList = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-6')
);
export const offerItem = classnames(
  backgroundColor('bg-primary-l2'),
  borderRadius('rounded-md'),
  display('flex'),
  width('w-full'),
  height('h-20'),
  cursor('cursor-pointer')
);
