import { createBrowserRouter } from 'react-router-dom';
import { PublicTemplate } from '../templates/PublicTemplate';
import { Anime } from '../pages/Anime';
import { AnimeSections } from '../pages/AnimeSections';
import { TopAiring } from '../components/AnimeTop/TopAiring';
import { TopAll } from '../components/AnimeTop/TopAll';
import { TopUpcoming } from '../components/AnimeTop/TopUpcoming';
import { TopTvSeries } from '../components/AnimeTop/TopTvSeries';
import { TopMovies } from '../components/AnimeTop/TopMovies';
import { TopOvas } from '../components/AnimeTop/TopOvas';
import { TopOnas } from '../components/AnimeTop/TopOnas';
import { TopSpecials } from '../components/AnimeTop/TopSpecials';
import { TopMostPopular } from '../components/AnimeTop/TopMostPopular';
import { TopMostFavorite } from '../components/AnimeTop/TopMostFavorite';
const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicTemplate />,
    children: [
      {
        index: true,
        element: <Anime />,
      },
      {
        path: '/anime-top',
        element: <AnimeSections />,
        children: [
          {
            index: true,
            element: <TopAll />,
          },
          {
            path: '/anime-top/airing',
            element: <TopAiring />,
          },
          {
            path: '/anime-top/upcoming',
            element: <TopUpcoming />,
          },
          {
            path: '/anime-top/tv-series',
            element: <TopTvSeries />,
          },
          {
            path: '/anime-top/movies',
            element: <TopMovies />,
          },
          {
            path: '/anime-top/ovas',
            element: <TopOvas />,
          },
          {
            path: '/anime-top/onas',
            element: <TopOnas />,
          },
          {
            path: '/anime-top/specials',
            element: <TopSpecials />,
          },
          {
            path: '/anime-top/most-popular',
            element: <TopMostPopular />,
          },
          {
            path: '/anime-top/most-favorite',
            element: <TopMostFavorite />,
          },
        ],
      },
    ],
  },
]);

export default router;
