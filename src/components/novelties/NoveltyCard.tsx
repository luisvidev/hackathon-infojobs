import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  content: string;
  href: string;
  imagePath: string;
}

export const NoveltyCard: React.FC<Props> = ({
  title,
  content,
  href,
  imagePath,
}) => {
  return (
    <Link
      href={href}
      className="max-w-sm bg-white hover:bg-primary-l4 shadow-2xl rounded-md cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full h-52"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold leading-none mb-4 text-primary">
          {title}
        </h2>
        <p className="text-base">{content}</p>
      </div>
    </Link>
  );
};
