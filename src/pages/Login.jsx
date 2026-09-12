import React from "react";
import { useNavigate } from "react-router-dom";
import { Route, ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Login() {
  const { setLoggedIn } = useApp();
  const navigate = useNavigate();
  const onLogin = () => {
    setLoggedIn(true);
    navigate("/");
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand centered">
          <span className="brand-mark">
            <Route size={21} />
          </span>
          <span>waymate</span>
        </div>
        <h1>Welcome to Waymate.</h1>
        <p>
          Find students already heading your way — or share your own commute.
        </p>
        <button className="primary-btn wide" onClick={onLogin}>
          <ShieldCheck size={18} /> Login / Signup{" "}
        </button>
        <small>Prototype verification — no real credentials required.</small>
      </div>
    </div>
  );
}
