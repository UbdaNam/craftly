import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const AppLayout = () => {
  return (
    <div className="flex bg-sidebar min-h-screen w-full">
      <SideBar />
      <div className="flex flex-col flex-auto">
        <main className="my-2 mr-2 flex flex-col flex-auto bg-background/80 border border-border rounded-sm shadow-xs">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
