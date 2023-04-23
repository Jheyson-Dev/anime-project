import { Outlet } from 'react-router';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const PublicTemplate = () => {
  return (
    <div className='bg-black-primary'>
      <Header />
      <div className='container mx-auto text-white'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
