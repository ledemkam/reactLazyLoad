import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header">
        <Link to="https://saigowthamr.github.io/Itunes-Top-100-albums/" style={{
            textDecoration: "none",
            color: "white", borderBottom: "1px solid red"
        }}>Top 100 Albums from Itunes</Link>
    </header>
  )
}

export default Header
