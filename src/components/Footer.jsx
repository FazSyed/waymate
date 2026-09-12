import React from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-top">
        <div>
          <button className="brand" onClick={() => navigate("/")}>
            <span className="brand-mark">
              <Route size={20} />
            </span>
            <span>waymate</span>
          </button>
          <p>Your way to campus. Shared.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => navigate("/find")}>Find a ride</button>
          <button onClick={() => navigate("/offer")}>Offer a ride</button>
          <button onClick={() => navigate("/problem")}>
            Problem & Solution
          </button>
          <button onClick={() => navigate("/safety")}>Safety</button>
          <button onClick={() => navigate("/how")}>How it works</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Built for UAE Students · Prototype</span>
        <span>Cost sharing, not commercial transport.</span>
      </div>
    </footer>
  );
}
