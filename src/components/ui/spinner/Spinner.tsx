interface Props {
  color?: 'white' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

export const Spinner: React.FC<Props> = ({ color = 'white', size = 'sm' }) => {
  return (
    <div
      className={`animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-${color} rounded-full`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
