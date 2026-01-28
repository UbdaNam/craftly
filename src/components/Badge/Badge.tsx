import { cn } from '@/lib/utils';
import { TwMainColor } from '@/types';
import { ReactNode } from 'react';

export interface BadgeProps {
  className?: string;
  name: ReactNode;
  color?: TwMainColor;
}

const TWMainColors: Record<NonNullable<BadgeProps['color']>, string> = {
  pink: 'text-pink-800 bg-pink-100',
  red: 'text-red-800 bg-red-100',
  gray: 'text-gray-800 bg-gray-100',
  green: 'text-green-800 bg-green-100',
  purple: 'text-purple-800 bg-purple-100',
  indigo: 'text-indigo-800 bg-indigo-100',
  yellow: 'text-yellow-800 bg-yellow-100',
  blue: 'text-blue-800 bg-blue-100',
};

const Badge = ({
  className = 'relative',
  name,
  color = 'blue',
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs ',
        className,
        TWMainColors[color]
      )}
    >
      {name}
    </span>
  );
};

export default Badge;
