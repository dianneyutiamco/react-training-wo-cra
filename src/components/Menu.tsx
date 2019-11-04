import * as React from "react";
import { Link } from "react-router-dom";
import "../css/main.scss";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const handleBurgerMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return(
    <nav>
      {/* // TODO : create menu component and components for common items
      // TODO : hide/show active menus */}
      <div className={"burger-menu-icon" + (isMenuOpen ? " open" : "")} onClick={() => handleBurgerMenuIconClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={"menu-parent-list" + (isMenuOpen ? " open" : "")} >
        <li>
          <span>Calculations</span>
          <Link to="/calculations">List</Link>
          <ul>
            <li>
              <Link to="/calculations">List</Link>
            </li>
            <li>
              <Link to="/calculations/new">New</Link>
            </li>
          </ul>
        </li>

        <li>
          <span>Input Parameter (Custom Record)</span>
          <ul>
            <li>
              <Link to="/home">List</Link>
            </li>
            <li>
              <Link to="/home">New</Link>
            </li>
          </ul>
        </li>

        <li>
          <span>Validation Rule</span>
          <ul>
            <li>
              <Link to="/validations">List</Link>
            </li>
            <li>
              <Link to="/validations/new">New</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}