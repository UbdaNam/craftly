import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Overview from '../pages/Overview';
import Content from '../pages/Content';
import Inbox from '../pages/Inbox';
import Teams from '../pages/Teams';

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/content" element={<Content />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/teams" element={<Teams />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
