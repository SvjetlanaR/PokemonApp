import React from "react";

import { NavLink } from "react-router-dom";
import NavbarCustom from "./NavbarCustom";

export default function HomePage() {
  return (
    <div className="home-page">
      <NavbarCustom />
      <div>
        {" "}
        <h2>HomePage</h2>
      </div>

      <div>
        <NavLink to="/pokemon">Pokemon List</NavLink>
      </div>
    </div>
  );
}
