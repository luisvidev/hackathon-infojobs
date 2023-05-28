import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  boxShadow,
  cursor,
  display,
  flexDirection,
  flexShrink,
  fontSize,
  fontWeight,
  gap,
  height,
  justifyContent,
  margin,
  scale,
  width,
  minHeight,
  padding,
  textColor,
  textDecoration,
  lineHeight,
} from '@root/tailwindcss-classnames';
import { flexWrap } from 'tailwindcss-classnames';

export const offersContainer = classnames(minHeight('min-h-full'));

export const offerList = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-6'),
  margin('mt-8')
);

export const spinnerContainer = classnames(
  height('h-32'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
);

export const title = classnames(
  fontSize('text-2xl'),
  fontWeight('font-semibold')
);

export const paginationContainer = classnames(
  margin('mt-16'),
  width('w-full'),
  display('flex'),
  justifyContent('justify-center'),
  gap('gap-2')
);

export const paginationItem = classnames(
  textColor('text-primary'),
  padding('p-2'),
  backgroundColor('bg-white', 'hover:bg-primary-l4'),
  borderRadius('rounded'),
  fontWeight('font-semibold')
);

// =================================================
// OFFER ITEM
export const offerItem = classnames(
  backgroundColor('bg-white'),
  backgroundColor('hover:bg-primary-l4'),
  boxShadow('shadow-2xl'),
  borderRadius('rounded-md'),
  display('flex'),
  width('w-full'),
  // height('h-32'),
  cursor('cursor-pointer'),
  scale('hover:scale-105')
);

export const offerItemLogoContainer = classnames(
  flexShrink('shrink-0'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  width('w-24')
);

export const offerItemLogo = classnames(width('w-16'), height('h-16'));

export const offerItemData = classnames(
  padding('p-4'),
  display('flex'),
  flexDirection('flex-col')
);

export const offerItemDataTitle = classnames(
  fontSize('text-lg'),
  fontWeight('font-semibold'),
  lineHeight('leading-none')
);

export const offerItemDataAuthorLink = classnames(
  fontSize('text-sm'),
  textColor('text-primary'),
  textDecoration('hover:underline')
);

export const offerItemDataList = classnames(
  padding('py-1'),
  display('flex'),
  flexWrap('flex-wrap')
);
