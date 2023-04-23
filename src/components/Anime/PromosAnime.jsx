import { useEffect } from 'react';
import { usePromos } from '../../store/promos-store';
import { SectionAnime } from '../../components/Anime/SectionAnime';

export const PromosAnime = () => {
  const { getPromos, error, loading, slicePromos } = usePromos(state => ({
    getPromos: state.getPromos,
    slicePromos: state.slicePromos,
    loading: state.loading,
    error: state.error,
  }));

  useEffect(() => {
    getPromos(`watch/promos/popular`);
  }, []);

  return (
    <div>
      <SectionAnime
        slice={slicePromos}
        error={error}
        loading={loading}
        title={'Promos'}
      />
    </div>
  );
};
