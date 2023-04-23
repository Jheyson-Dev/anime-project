import { useEffect } from 'react';
import { useAiring } from '../../store/TopAnimes/airing-store';
import { AnimeTop } from './AnimeTop';
export const TopTvSeries = () => {
  const { getTopAiring, airing } = useAiring();
  useEffect(() => {
    getTopAiring('top/anime?type=tv');
  }, []);
  return <AnimeTop animes={airing} />;
};
