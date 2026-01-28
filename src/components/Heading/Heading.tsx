import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  ...args
}) => {
  return (
    <h2 {...args} className={cn('text-foreground', className)}>
      {children}
    </h2>
  );
};
