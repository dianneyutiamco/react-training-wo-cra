import * as React from "react";
import { Menu } from "./Menu";
import { Modal } from "./Modal";

// TODO : Copied C#'s "Master Page" concept for site-wide page layout
export const MasterPage = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const nav = {
    listStyleType: "none"
  }

  const handleBurgerMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  }

  return(
    <div>
      <header>
        <Menu isMenuOpen={isMenuOpen} handleMenuOpenClick={handleBurgerMenuIconClick} handleMenuItemClick={handleMenuItemClick}/>
      </header>

      <main className={isMenuOpen ? "menu-open" : ""}>
        {props.children}
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}