import React from "react";
import { useState } from "react";
import arrowUp from "../assets/arrow-up.svg";

function DropdownMenu({ label, options, fontSizeOption,fontSizeLabel }) {
      const [isOpen, setIsOpen] = useState(false);
      const menuClassName = isOpen ? "dropdown-menu__options open" : "dropdown-menu__options";

      const handleToggle = () => {
            setIsOpen(!isOpen);
      };

      return (
            <div className="dropdown-menu__container">
                  <div className="dropdown-menu">
                        <span className="dropdown-menu__label" style={{fontSize:`${fontSizeLabel}px`}}>{label}</span>
                        <button className="dropdown-menu__toggle" onClick={handleToggle}>
                              <img className={`dropdown-menu__arrow ${isOpen ? "open" : ""}`} src={arrowUp} alt="dropdown arrow" />
                        </button>
                  </div>
                  {isOpen && (
                        <ul className={menuClassName} >
                              {/* Vérifier si `options` est un tableau */}
                              {Array.isArray(options) ? (
                                    // Cas où `options` est un tableau
                                    options.map((option, index) => (
                                          <li key={index} className="dropdown-menu__option" style={{fontSize:`${fontSizeOption}px`}}>
                                                {option}
                                          </li>
                                    ))
                              ) : (
                                    // Cas où `options` est une valeur simple
                                    <li className="dropdown-menu__option">{options}</li>
                              )}
                        </ul>
                  )}
            </div>
      );
}

export default DropdownMenu;
