interface Props {
  color?: 'white' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

const sizeObj = {
  sm: 6,
  md: 8,
  lg: 10,
};

export const Spinner: React.FC<Props> = ({ color = 'white', size = 'sm' }) => {
  const _size = sizeObj[size];
  return (
    <div
      className={`animate-spin inline-block w-${_size} h-${_size} border-[3px] border-current border-t-transparent text-${color} rounded-full`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
