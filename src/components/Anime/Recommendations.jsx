import { useEffect } from 'react';
import { useRecommendations } from '../../store/recommendations-store';
import { Recommend } from './Recommend';

export const Recommendations = () => {
  const { getRecommendations, sliceRecommendations, error, loading } =
    useRecommendations();

  useEffect(() => {
    getRecommendations('recommendations/anime');
  }, []);

  return (
    <div>
      <Recommend
        loading={loading}
        slice={sliceRecommendations}
        error={error}
        title={'Recommendations'}
      />
    </div>
  );
};
