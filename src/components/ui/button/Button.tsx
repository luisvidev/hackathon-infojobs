/* eslint-disable react/display-name */
import { FC } from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  children,
  type,
  disabled,
  className,
  onClick,
  title,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      title={title}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};
