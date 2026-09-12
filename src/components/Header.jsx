import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Route, Sun, Moon, Menu, X, LogOut } from "lucide-react";
import { useApp } from "../context/AppContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/find", label: "Find a ride" },
  { to: "/offer", label: "Offer a ride" },
  { to: "/commutes", label: "My commutes" },
  { to: "/problem", label: "Problem & Solution" },
  { to: "/how", label: "How it works" },
  { to: "/safety", label: "Safety" },
];

export default function Header() {
  const { loggedIn, setLoggedIn, theme, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1271px)");
    const closeIfDesktop = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    if (mq.matches) setMenuOpen(false);
    mq.addEventListener("change", closeIfDesktop);
    return () => mq.removeEventListener("change", closeIfDesktop);
  }, []);

  const goTo = (to) => {
    setMenuOpen(false);
    navigate(to);
  };

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="header">
      <div className="nav-wrap">
        <NavLink to="/" className="brand">
          <span className="brand-mark">
            <Route size={21} />
          </span>
          <span>waymate</span>
        </NavLink>
        <nav className="desktop-nav">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/find" className={linkClass}>
            Find a ride
          </NavLink>
          <NavLink to="/offer" className={linkClass}>
            Offer a ride
          </NavLink>
          <NavLink to="/commutes" className={linkClass}>
            My commutes
          </NavLink>
          <NavLink to="/problem" className={linkClass}>
            Problem & Solution
          </NavLink>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="profile-chip" onClick={() => navigate("/profile")}>
            <span className="avatar">FS</span>
            <span className="hide-sm">Fazilah</span>
          </button>
          <button
            className="outline-btn hide-sm"
            onClick={() => {
              setLoggedIn(false);
              navigate("/login");
            }}
          >
            {loggedIn ? "Sign out" : "Sign in"}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <>
          <button
            className="menu-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="mobile-menu-panel">
            {links.map((l) => (
              <button
                key={l.to}
                className={
                  (l.end
                    ? location.pathname === l.to
                    : location.pathname.startsWith(l.to))
                    ? "active"
                    : ""
                }
                onClick={() => goTo(l.to)}
              >
                {l.label}
              </button>
            ))}
            <button
              className="mobile-menu-signout"
              onClick={() => {
                setMenuOpen(false);
                setLoggedIn(false);
                navigate("/login");
              }}
            >
              <LogOut size={16} />
              {loggedIn ? "Sign out" : "Sign in"}
            </button>
          </nav>
        </>
      )}
    </header>
  );
}
