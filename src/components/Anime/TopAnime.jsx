import { useEffect } from 'react';
import { useTop } from '../../store/top-store';
import { AnimesSlice } from './AnimesSlice';

export const TopAnime = () => {
  const { getTopAnime, sliceTops, error, loading } = useTop();
  useEffect(() => {
    getTopAnime('top/anime');
  }, []);

  return (
    <div>
      {console.log(sliceTops)}
      <AnimesSlice
        slice={sliceTops}
        loading={loading}
        error={error}
        title={"Tops Animes"}
      />
    </div>
  );
};
