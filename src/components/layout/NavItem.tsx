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
          `flex space-x-2 text-sm leading-6 text-slate-800 items-center px-2 py-1 rounded-sm hover:bg-gray-200 hover:text-black transform transition-colors duration-50`,
          isActive ? 'bg-gray-200' : ''
        )
      }
    >
      <Icon className="size-4" />
      <span className="text-slate-800">{label}</span>
    </NavLink>
  );
};

export default NavItem;
