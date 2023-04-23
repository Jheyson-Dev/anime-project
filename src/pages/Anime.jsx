import { PromosAnime } from '../components/Anime/PromosAnime';
import { Recommendations } from '../components/Anime/Recommendations';
import { SeasonAnime } from '../components/Anime/SeasonAnime';
import { TopAnime } from '../components/Anime/TopAnime';
import { Carrucel } from '../components/Carrucel/Carrucel';

export const Anime = () => {
  return (
    <div className='py-10'>
      <Carrucel />
      <div className='grid gap-10'>
        <PromosAnime />
        <TopAnime />
        <SeasonAnime />
        <Recommendations />
      </div>
    </div>
  );
};
