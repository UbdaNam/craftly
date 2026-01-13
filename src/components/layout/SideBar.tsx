import {
  Bubbles,
  ChartNoAxesGantt,
  Inbox,
  SquareBottomDashedScissors,
  Users,
} from 'lucide-react';
import NavItem from './NavItem';

const navMenu = [
  {
    label: 'Overview',
    path: '/',
    Icon: ChartNoAxesGantt,
  },
  {
    label: 'Inbox',
    path: '/inbox',
    Icon: Inbox,
  },
  {
    label: 'Content',
    path: '/content',
    Icon: Bubbles,
  },
  {
    label: 'Teams',
    path: '/teams',
    Icon: Users,
  },
];

const SideBar = () => {
  return (
    <aside>
      <div className="w-60 h-full" />
      <div className="w-60 fixed top-0 left-0 bottom-0 py-2 flex flex-col z-50">
        <div className="relative flex-none min-h-0">
          <nav className="relative h-full flex flex-col">
            <div className="flex space-x-1 py-2 pl-6 pr-4 items-center mb-6">
              <SquareBottomDashedScissors className="size-5" />
              <span className="text-lg">Craftly</span>
            </div>
            <div className="flex flex-col gap-0.5 px-4">
              {navMenu.map((navItem) => (
                <NavItem
                  label={navItem.label}
                  path={navItem.path}
                  Icon={navItem.Icon}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
