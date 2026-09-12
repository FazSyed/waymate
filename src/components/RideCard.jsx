import React from "react";
import { ArrowRight, ShieldCheck, Clock3, CalendarDays, Users } from "lucide-react";

export default function RideCard({ ride, open }) {
  return (
    <article className="ride-card">
      <div className="ride-main">
        <div className="person-avatar">
          {ride.driver
            .split(" ")
            .map((x) => x[0])
            .join("")}
        </div>
        <div className="ride-info">
          <div className="name-line">
            <h3>{ride.driver}</h3>
            {ride.verified && (
              <span className="verified">
                <ShieldCheck size={14} /> Waymate verified
              </span>
            )}
          </div>
          <p className="major">{ride.major}</p>
          <div className="route-line">
            <b>{ride.from}</b>
            <ArrowRight size={16} />
            <b>{ride.to}</b>
          </div>
          <div className="ride-meta">
            <span>
              <Clock3 size={15} />
              {ride.time}
            </span>
            <span>
              <CalendarDays size={15} />
              {ride.days}
            </span>
            <span>
              <Users size={15} />
              {ride.seats} seats
            </span>
          </div>
        </div>
        <div className="match-box">
          <strong>{ride.match}%</strong>
          <span>route match</span>
        </div>
      </div>
      <div className="ride-footer">
        <div className="pref-row">
          {ride.prefs.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
        <div className="cost">
          <small>Estimated cost share</small>
          <b>{ride.cost}</b>
        </div>
        <button className="primary-btn small" onClick={open}>
          Request a seat
        </button>
      </div>
    </article>
  );
}
