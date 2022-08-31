import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-menu">
        <Link to="/" className="nav-logo" />
        <SearchBar />
      </div>
    </header>
  );
}
