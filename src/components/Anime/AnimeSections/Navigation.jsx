import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  const items = [
    {
      path: '/anime-top',
      title: 'All Anime',
    },
    {
      path: '/anime-top/airing',
      title: 'Top Airing',
    },
    {
      path: '/anime-top/upcoming',
      title: 'Top Upcoming',
    },
    {
      path: '/anime-top/tv-series',
      title: 'Top TV series',
    },
    {
      path: '/anime-top/movies',
      title: 'Top Movies',
    },
    {
      path: '/anime-top/ovas',
      title: 'Top OVAS',
    },
    {
      path: '/anime-top/onas',
      title: 'Top ONAS',
    },
    {
      path: '/anime-top/specials',
      title: 'Top Specials',
    },
    {
      path: '/anime-top/most-popular',
      title: 'Top Most Popular',
    },
    {
      path: '/anime-top/most-favorite',
      title: 'Most Favorite',
    },
  ];
  return (
    <nav>
      <ul className='flex  text-xs'>
        {items.map(el => {
          return (
            <li key={el.path}>
              <div className='border-b-2 border-b-purple-primary'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'active-navigation link-navigation'
                      : 'link-navigation'
                  }
                  to={el.path}
                >
                  {el.title}
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
