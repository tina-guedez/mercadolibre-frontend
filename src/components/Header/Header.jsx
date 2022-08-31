import React from 'react';
import './Header.css';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
  return (
    <>
      <header className="nav">
        <div className="nav-menu">
          <a href='/' tabIndex="0" className="nav-logo">
          </a>
          <SearchBar/>
        </div>
      </header>
    </>
  )
}
