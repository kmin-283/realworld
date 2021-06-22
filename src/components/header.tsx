import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({appName} : {appName: string}) => {
  const navbar = 'navbar navbar-light';
  const homeLink = 'nav navbar-nav pull-xs-right';
  return (
    <nav className={navbar}>
      <div className={'container'}>
        <Link to={'/'} className={'navbar-brand'}>
          {appName.toLowerCase()}
        </Link>
        <ul className={homeLink}>
          <li className={'nav-item'}>
            <Link to={'/'} className={'nav-link'}>
              Home
            </Link>
          </li>

          <li className={'nav-item'}>
            <Link to={'login'} className={'nav-link'}>
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;