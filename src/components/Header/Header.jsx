import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <div className='contenedor'>
        <div>
          <Link to={'/'}>
            <img
              src={logo}
              alt='Logo Anime'
              className='logo'
            />
          </Link>
        </div>
        <nav>
          <ul className='flex gap-5'>
            <li>
              <div>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'desactive'
                  }
                >
                  Anime
                </NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink
                  to={'/anime-top'}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'desactive'
                  }
                >
                  Top Anime
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
