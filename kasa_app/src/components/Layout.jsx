import React from "react";
import logoMobile from "../assets/mobile/logo-kasa-mobile.png";
import logoDesktop from "../assets/desktop/logo-kasa-desktop.png";
import logoFooter from "../assets/logo-footer.svg";
import { Link } from "react-router-dom";

function Layout(props) {
      const {children, isSmallScreen} = props;

      return (
            <div className="layout">
                  <header className="header">
                        <nav className="navbar">
                              <Link to="/">
                                    <img src={isSmallScreen ? logoMobile : logoDesktop} alt="Logo Kasa" />
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
                        <img src={logoFooter} alt="Logo Kasa" />
                        <p>© 2020 Kasa. All rights reserved</p>
                  </footer>
            </div>
      );
}

export default Layout;
