import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

// Importaciones dinámicas para uso de lazy. Permite cargar un componente solo cuando es llamado.
const SearchResult = React.lazy(() => { return import('./pages/SearchResult/components/SearchResult'); });
const ItemDetail = React.lazy(() => { return import('./pages/ItemDetail/ItemDetail'); });
const Home = React.lazy(() => { return import('./pages/Home/Home'); });

function App() {
  return (
    <Suspense fallback={<>...</>}>
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
    </Suspense>
  );
}

export default App;
