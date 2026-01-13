import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const AppLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen w-full">
      <SideBar />
      <div className="flex flex-col flex-auto">
        <main className="my-2 mr-2 flex flex-col flex-auto bg-white border border-gray-200 rounded-md shadow-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
