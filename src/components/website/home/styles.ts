import classnames, {
  fontSize,
  fontWeight,
  padding,
} from '@root/tailwindcss-classnames';

export const section = classnames(padding('py-20'));

export const title = classnames(
  fontWeight('font-semibold'),
  padding('pb-5'),
  fontSize('text-3xl')
);
