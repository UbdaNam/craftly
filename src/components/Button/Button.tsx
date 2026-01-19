import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  sizeClass?: string;
  fontSize?: string;
  pattern?: 'primary' | 'black' | 'default';
}

const COLOR_PATTERNS: Record<NonNullable<ButtonProps['pattern']>, string> = {
  default:
    'bg-white hover:bg-stone-100 text-stone-700 border border-border shadow-2xs',
  primary: 'bg-primary hover:bg-primary-hover text-white',
  black:
    'bg-stone-800 hover:bg-stone-950 text-white border border-border shadow-2xs',
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
    rounded-md transition-colors
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
