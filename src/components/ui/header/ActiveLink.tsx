import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const pathname = usePathname();
  const stylesForHomePage = pathname === '/' ? 'text-white' : 'text-black';
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'text-primary font-bold' : stylesForHomePage
      } px-2`}
    >
      {text}
    </Link>
  );
};
