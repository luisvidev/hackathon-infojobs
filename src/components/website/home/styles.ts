import classnames, {
  fontSize,
  fontWeight,
  margin,
  padding,
} from '@root/tailwindcss-classnames';

export const section = classnames(margin('my-20'));

export const title = classnames(
  fontWeight('font-semibold'),
  padding('pb-5'),
  fontSize('text-3xl')
);
