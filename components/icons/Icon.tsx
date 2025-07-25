// components/icons/SingleSparkle.tsx
type Props = {
  className?: string;
};

export const SingleSparkle = ({ className = "w-12 h-12 text-emerald-300" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
  >
    <path d="M50,0 C52,44 60,45 100,50 C56,52 49,62 50,100 C44,50 28,56 0,50 C38,50 44,46 50,0 Z" />
     </svg>
);

