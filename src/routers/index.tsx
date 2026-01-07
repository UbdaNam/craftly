import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Overview from '../pages/Overview';
import Content from '../pages/Content';

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/content" element={<Content />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
