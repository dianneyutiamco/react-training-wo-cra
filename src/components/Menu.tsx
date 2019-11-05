import * as React from "react";
import { Link } from "react-router-dom";
import "../css/main.scss";

export interface MenuProps {
  isMenuOpen: boolean;
  handleMenuOpenClick: () => void;
  handleMenuItemClick: () => void;
}

export const Menu = (props: MenuProps) => {
  const {isMenuOpen, handleMenuOpenClick, handleMenuItemClick} = props;

  return(
    <nav>
      {/* // TODO : create menu component and components for common items
      // TODO : hide/show active menus */}
      <div className={"burger-menu-icon" + (isMenuOpen ? " open" : "")} onClick={() => handleMenuOpenClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={"menu-parent-list" + (isMenuOpen ? " open" : "")} >
        <li>
          <Link to="/calculations" onClick={() => handleMenuItemClick()}>Calculations</Link>
        </li>

        <li>
          <Link to="/calculations" onClick={() => handleMenuItemClick()}>Input Parameters</Link>
        </li>

        <li>
          <Link to="/validations" onClick={() => handleMenuItemClick()}>Validations</Link>
        </li>
      </ul>
    </nav>
  );
}