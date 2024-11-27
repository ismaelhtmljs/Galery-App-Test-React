// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";  // Importamos Link para las rutas

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="titulo">
                    <img src="/vite.svg" alt="logo" className="img-logo"/>
                    <h1>Galeria De Montañas</h1>
                </div>
                <div className="contenedor-lista">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/images">Images</Link>
                        </li>
                        <li>
                            <Link to="/copyright">CopyRight</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
