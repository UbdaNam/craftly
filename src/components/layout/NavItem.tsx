import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface NavItemProps {
  label: string;
  path: string;
  Icon: LucideIcon;
}

const NavItem = ({ label, path, Icon }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          `flex space-x-2 text-sm leading-6 text-stone-700 items-center px-2 py-1 rounded-sm hover:bg-primary-bg hover:text-primary-hover transform transition-colors duration-50`,
          isActive ? 'bg-primary-bg text-primary-hover' : ''
        )
      }
    >
      <Icon className="size-4" />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
