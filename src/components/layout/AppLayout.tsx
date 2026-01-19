import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const AppLayout = () => {
  return (
    <div className="flex bg-background min-h-screen w-full">
      <SideBar />
      <div className="flex flex-col flex-auto">
        <main className="my-2 mr-2 flex flex-col flex-auto bg-white/80 border border-stone-200 rounded-sm shadow-xs">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
