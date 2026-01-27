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
          `flex space-x-2 text-sm leading-6 text-sidebar-foreground items-center px-2 py-1 rounded-sm hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transform transition-colors duration-50`,
          isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : ''
        )
      }
    >
      <Icon className="size-4" />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
