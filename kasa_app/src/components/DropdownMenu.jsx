import React from "react";
import { useState } from "react";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";

function DropdownMenu({ text, options }) {
      const [isOpen, setIsOpen] = useState(false);

      const handleToggle = () => {
            setIsOpen(!isOpen);
      };

      return (
            <div className="dropdown-menu__container">
                  <div className="dropdown-menu">
                        <span className="dropdown-menu__text">{text}</span>
                        <button className="dropdown-menu__toggle" onClick={handleToggle}>
                              <img className="dropdown-menu__arrow" src={isOpen ? arrowDown : arrowUp} alt="dropdown arrow" />
                        </button>
                  </div>
                  {isOpen && (
                        <ul className="dropdown-menu__options">
                              {options.map((option, index) => (
                                    <li key={index} className="dropdown-menu__option">
                                          {option}
                                    </li>
                              ))}
                        </ul>
                  )}
            </div>
      );
}

export default DropdownMenu;
