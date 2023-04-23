import { useEffect } from 'react';
import { useTop } from '../../store/top-store';
import { AnimeTop } from './AnimeTop';

export const TopAll = () => {
  const { tops, getTopAnime } = useTop();
  useEffect(() => {
    getTopAnime('top/anime');
  }, []);

  return <AnimeTop animes={tops} />;
};
