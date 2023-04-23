import { useEffect } from 'react';
import { useAiring } from '../../store/TopAnimes/airing-store';
import { AnimeTop } from './AnimeTop';

export const TopMovies = () => {
  const { getTopAiring, airing } = useAiring();
  useEffect(() => {
    getTopAiring('top/anime?type=movie');
  }, []);
  return <AnimeTop animes={airing} />;
};
