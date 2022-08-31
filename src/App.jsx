import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/components/SearchResult';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import './App.css';

function App() {
  return (
    <div className="container-main">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items" element={<SearchResult />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
