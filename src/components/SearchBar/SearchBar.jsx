import './Searchbar.css';
import React from 'react';
import SearchIcon from '../../assets/ic_Search@2x.png.png';

export const SearchBar = () => (
  <form className="nav-search" action="/items" method="GET" role="search">
    <input
      aria-label="Ingresá lo que quieras encontrar"
      autoComplete="off"
      className="nav-search-input"
      maxLength="120"
      name="q"
      placeholder="Nunca dejes de buscar"
      required
      tabIndex="0"
      type="text"
    />
    <button type="submit" className="nav-search-btn" tabIndex="-1">
      <img aria-label="Buscar" className="nav-icon-search" src={SearchIcon} />
    </button>
  </form>
);
