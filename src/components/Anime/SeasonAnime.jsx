import { useEffect } from 'react';
import { useSeason } from '../../store/season-store';
import { AnimesSlice } from './AnimesSlice';

export const SeasonAnime = () => {
  const { getSeasonAnime, sliceSeasons, error, loading } = useSeason();
  useEffect(() => {
    getSeasonAnime('seasons/now');
  }, []);

  return (
    <div>
      <AnimesSlice
        slice={sliceSeasons}
        loading={loading}
        error={error}
        title={'Season Anime'}
      />
    </div>
  );
};
