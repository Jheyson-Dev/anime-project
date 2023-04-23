import { useEffect } from 'react';
import { useAiring } from '../../store/TopAnimes/airing-store';
import { AnimeTop } from './AnimeTop';
export const TopOvas = () => {
  const { getTopAiring, airing } = useAiring();
  useEffect(() => {
    getTopAiring('top/anime?type=ova');
  }, []);
  return <AnimeTop animes={airing} />;
};
