import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Anime/AnimeSections/Navigation';

export const AnimeSections = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
