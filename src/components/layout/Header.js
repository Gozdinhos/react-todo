import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>
      |{' '}
      <Link style={linkStyle} to='about'>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#4c5076',
  color: '#fffcfc',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  color: '#fffcfc',
  textDecoration: 'none'
};