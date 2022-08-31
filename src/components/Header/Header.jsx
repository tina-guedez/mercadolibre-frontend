import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-menu">
        <a href="/" tabIndex="0" className="nav-logo" />
        <SearchBar />
      </div>
    </header>
  );
}
