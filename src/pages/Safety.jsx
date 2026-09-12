import React from "react";
import {
  GraduationCap,
  MapPin,
  SlidersHorizontal,
  Star,
  Flag,
  ShieldCheck,
} from "lucide-react";

export default function Safety() {
  const items = [
    [
      GraduationCap,
      "Verified students",
      "Only verified RIT Dubai students can participate.",
    ],
    [
      MapPin,
      "Public pickup points",
      "Use recognizable public locations instead of exact residential addresses.",
    ],
    [
      SlidersHorizontal,
      "Ride preferences",
      "Choose options such as women only, quiet ride or no smoking.",
    ],
    [
      Star,
      "Ratings",
      "Leave feedback after completed carpools to help the community.",
    ],
    [
      Flag,
      "Report or block",
      "If something feels wrong, you can report a user or block them.",
    ],
  ];
  return (
    <div className="page-shell narrow">
      <div className="page-intro">
        <span className="eyebrow">Safety center</span>
        <h1>Ride with confidence.</h1>
        <p>Trust isn't an add-on. It's part of how Waymate works.</p>
      </div>
      <div className="safety-list">
        {items.map(([Icon, t, d]) => (
          <div className="safety-item" key={t}>
            <div className="safety-emoji">
              <Icon size={20} />
            </div>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="safety-note">
        <ShieldCheck size={23} />
        <div>
          <h3>Privacy by design</h3>
          <p>
            Waymate avoids publicly displaying exact home addresses, phone
            numbers and other sensitive personal details.
          </p>
        </div>
      </div>
    </div>
  );
}
