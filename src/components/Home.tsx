import * as React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <h3>Home</h3>

        {
          // TODO : create menu component and components for common items

          // TODO : hide/show active menus
        }

        <h3>Menu</h3>
        <ul>
          <li>
            <span>Calculations</span>
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
    </div>
  );
}