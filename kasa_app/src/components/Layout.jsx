import React from "react";
import kasaLogo from "../assets/mobile/logo-kasa.png";
import { Link } from "react-router-dom";
import "../styles/layouts/_layout.scss";

function Layout({ children }) {
    return (
        <div className="layout">
            <header className="header">
                <nav className="navbar">
                    <Link to="/">
                        <img src={kasaLogo} alt="logo KASA" />
                    </Link>
                    <ul className="navlist">
                        <li className="navlink navlink--home">
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li className="navlink navlink--about">
                            <Link to="/about">A propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="footer">
                <img src={kasaLogo} alt="logo KASA" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
}

export default Layout;
