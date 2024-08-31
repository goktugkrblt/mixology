import React from 'react';
import './NavbarComponent.scss';
import GitHubSvg from '../../assets/GithubSvg';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__container__logo">Mixology</a>
        <a href="#" className="navbar__container__logo__github"><GitHubSvg/></a>
      </div>
    </nav>
  );
};

export default NavbarComponent;
