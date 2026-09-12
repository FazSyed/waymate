import React from "react";
import { NavLink } from "react-router-dom";
import { Home as HomeIcon, Search, Plus, Car, UserRound } from "lucide-react";

export default function MobileNav() {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <div className="mobile-nav">
      <NavLink to="/" end className={linkClass}>
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink to="/find" className={linkClass}>
        <Search />
        <span>Find</span>
      </NavLink>
      <NavLink to="/offer" className="mobile-add">
        <Plus />
      </NavLink>
      <NavLink to="/commutes" className={linkClass}>
        <Car />
        <span>Commutes</span>
      </NavLink>
      <NavLink to="/profile" className={linkClass}>
        <UserRound />
        <span>Profile</span>
      </NavLink>
    </div>
  );
}
