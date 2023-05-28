import classnames, { display, width } from '@root/tailwindcss-classnames';
import {
  alignItems,
  flexDirection,
  gap,
  justifyContent,
} from 'tailwindcss-classnames';

export const footerContainer = classnames(
  width('w-full'),
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  justifyContent('justify-between'),
  gap('gap-y-10')
);

export const footerSubRightContainer = classnames(
  display('flex'),
  justifyContent('md:justify-around', 'justify-center'),
  alignItems('items-center'),
  gap('gap-x-10')
);

export const footerFollowContainer = classnames(
  display('flex'),
  flexDirection('flex-col', 'sm:flex-row'),
  alignItems('items-center'),
  gap('gap-x-10', 'gap-y-5')
);
