import { useEffect } from 'react';
import { useAiring } from '../../store/TopAnimes/airing-store';
import { AnimeTop } from './AnimeTop';

export const TopOnas = () => {
  const { getTopAiring, airing } = useAiring();
  useEffect(() => {
    getTopAiring('top/anime?type=ona');
  }, []);
  return <AnimeTop animes={airing} />;
};
