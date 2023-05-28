import classnames, {
  display,
  flexDirection,
  width,
} from '@root/tailwindcss-classnames';
import { justifyContent } from 'tailwindcss-classnames';

export const secondaryLayoutContainer = classnames(
  width('w-full'),
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center')
);

export const secondaryLayoutSubContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-between')
);
