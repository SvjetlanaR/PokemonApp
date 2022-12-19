import React from "react";
import { NavLink } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>

      <NavLink to="/pokemon">Pokemon List</NavLink>
    </div>
  );
}
