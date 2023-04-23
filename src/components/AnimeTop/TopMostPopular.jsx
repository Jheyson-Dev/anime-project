import { useEffect } from 'react';
import { useAiring } from '../../store/TopAnimes/airing-store';
import { AnimeTop } from './AnimeTop';

export const TopMostPopular = () => {
  const { getTopAiring, airing } = useAiring();
  useEffect(() => {
    getTopAiring('top/anime?filter=bypopularity');
  }, []);
  return <AnimeTop animes={airing} />;
};
