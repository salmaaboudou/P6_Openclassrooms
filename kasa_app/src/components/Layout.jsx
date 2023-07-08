import React from "react";
import logoMobile from "../assets/mobile/logo-kasa-mobile.png";
import logoDesktop from "../assets/desktop/logo-kasa-desktop.png";
import logoFooter from "../assets/logo-footer.svg";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from 'react';

function Layout({ children }) {
    const isMobile = window.innerWidth <= 1240;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="layout">
            <header className="header">
                <nav className="navbar">
                    <Link to="/">
                        <img src={isMobile ? logoMobile : logoDesktop} alt="Logo Kasa"  key={windowWidth}/>
                    </Link>
                    <ul className="navlist">
                        <li>
                            <Link to="/" className="navlink navlink--home">
                                Acceuil
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="navlink navlink--about">
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="footer">
                <img src={logoFooter} alt="Logo Kasa"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
}

export default Layout;
