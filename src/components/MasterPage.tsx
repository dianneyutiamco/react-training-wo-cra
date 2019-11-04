import * as React from "react";
import { Menu } from "./Menu";

// TODO : Copied C#'s "Master Page" concept for site-wide page layout
export const MasterPage = (props: any) => {
  const nav = {
    listStyleType: "none"
  }

  return(
    <div>
      <header>
        <Menu />
      </header>

      <main>
        {props.children}
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}