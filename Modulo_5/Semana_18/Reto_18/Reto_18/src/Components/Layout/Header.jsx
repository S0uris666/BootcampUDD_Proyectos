import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/peliculas">Peliculas</Link></li>
        <li><Link to="/busqueda">Buscar</Link></li>
        
      </ul>
    </nav>
  );
};
