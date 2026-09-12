import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Car, ShieldCheck, ChevronRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function MyCommutes() {
  const { myCommutes, requests, ridesLabel } = useApp();
  const navigate = useNavigate();
  return (
    <div className="page-shell">
      <div className="page-intro">
        <span className="eyebrow">Your Waymate</span>
        <h1>My commutes.</h1>
        <p>Keep track of your recurring rides, requests and matches.</p>
      </div>
      <div className="dashboard-grid">
        <section className="dash-main">
          <div className="section-title">
            <h2>Upcoming</h2>
            <button className="text-btn" onClick={() => navigate("/find")}>
              Find a ride <ArrowRight size={15} />
            </button>
          </div>
          {myCommutes.length === 0 ? (
            <div className="empty-card">
              <Car size={26} />
              <h3>No commutes yet</h3>
              <p>Find a ride or share the commute you already make.</p>
              <div>
                <button
                  className="primary-btn small"
                  onClick={() => navigate("/find")}
                >
                  Find a ride
                </button>
                <button
                  className="secondary-btn small"
                  onClick={() => navigate("/offer")}
                >
                  Offer a ride
                </button>
              </div>
            </div>
          ) : (
            myCommutes.map((c) => (
              <div className="my-commute" key={c.id}>
                <div className="commute-icon">
                  <Car />
                </div>
                <div>
                  <h3>
                    {c.from} <ArrowRight size={15} /> {c.to}
                  </h3>
                  <p>
                    {c.time} · {c.days}
                  </p>
                  <div className="status live">{c.status}</div>
                </div>
                <button className="icon-btn">
                  <ChevronRight />
                </button>
              </div>
            ))
          )}
          {requests.length > 0 && (
            <>
              <div className="section-title mt">
                <h2>My requests</h2>
              </div>
              {requests.map((r) => (
                <div className="request-row" key={r.id}>
                  <div>
                    <b>Request to ride</b>
                    <span>{ridesLabel(r.rideId)}</span>
                  </div>
                  <span
                    className={
                      "status " +
                      (r.status === "Accepted" ? "confirmed" : "pending")
                    }
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </>
          )}
        </section>
        <aside className="dash-side">
          <div className="profile-summary">
            <div className="person-avatar xl">FS</div>
            <h3>Fazilah Syed</h3>
            <span className="verified">
              <ShieldCheck size={14} /> Waymate verified
            </span>
            <div className="profile-stat">
              <span>⭐ 4.9</span>
              <span>9 carpools</span>
            </div>
            <button
              className="secondary-btn small"
              onClick={() => navigate("/profile")}
            >
              View profile
            </button>
          </div>
          <div className="quick-card">
            <span className="eyebrow">Need a ride?</span>
            <h3>Someone might already be going your way.</h3>
            <button
              className="primary-btn small"
              onClick={() => navigate("/find")}
            >
              Find a ride <ArrowRight size={15} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
