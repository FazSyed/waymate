import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const navigate = useNavigate();
  return (
    <div className="page-shell narrow">
      <div className="page-intro">
        <span className="eyebrow">How it works</span>
        <h1>A simpler way to share the commute.</h1>
        <p>
          No endless group chats. No taxi booking. Just students already heading
          the same way.
        </p>
      </div>
      <div className="big-steps">
        {[
          "Enter your route",
          "Choose your time",
          "Find a compatible commute",
          "Request a seat",
          "Get matched",
        ].map((x, i) => (
          <div key={x}>
            <span>0{i + 1}</span>
            <div>
              <h2>{x}</h2>
              <p>
                {
                  [
                    "Tell us your approximate pickup area and destination.",
                    "Choose a recurring schedule or a one-time trip.",
                    "Waymate ranks routes using location, time and schedule compatibility.",
                    "See the driver, route, seats, preferences and estimated cost share.",
                    "Once accepted, you can coordinate the commute together.",
                  ][i]
                }
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="final-cta compact">
        <h2>Ready to find your way?</h2>
        <button className="primary-btn" onClick={() => navigate("/find")}>
          Find a ride <ArrowRight />
        </button>
      </div>
    </div>
  );
}
