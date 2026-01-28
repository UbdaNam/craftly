import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  sizeClass?: string;
  fontSize?: string;
  pattern?: 'primary' | 'black' | 'default';
}

const COLOR_PATTERNS: Record<NonNullable<ButtonProps['pattern']>, string> = {
  default:
    'bg-white/80 hover:bg-muted text-foreground text-sm border border-border shadow-2xs',
  primary: 'bg-primary hover:bg-primary/90 text-white',
  black:
    'bg-foreground hover:bg-foreground/90 text-white border border-border shadow-2xs',
};

const Button: FC<ButtonProps> = ({
  pattern = 'default',
  className = '',
  sizeClass = 'py-1 px-2',
  fontSize = 'text-sm',
  children,
  ...args
}) => {
  const colors = COLOR_PATTERNS[pattern];

  const CLASSES = `
    inline-flex items-center justify-center
    rounded-sm cursor-pointer transition-colors
    ${colors}
    ${fontSize}
    ${sizeClass}
    ${className}
  `;

  return (
    <button className={CLASSES} {...args}>
      {children}
    </button>
  );
};

export default Button;
