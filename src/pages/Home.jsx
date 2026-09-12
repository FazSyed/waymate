import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  UserRound,
  Car,
  Users,
  MapPin,
  Home as HomeIcon,
  Check,
  Clock3,
  CalendarDays,
  Route,
  ChevronRight,
} from "lucide-react";
import { corridors, oneTime } from "../data/mockData";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <ShieldCheck size={16} /> University students, connected
          </div>
          <h1>
            Your way to campus.
            <br />
            <em>Shared.</em>
          </h1>
          <p>
            Find University students already heading your way — or share your
            own commute.
          </p>
          <div className="hero-actions">
            <button
              className="primary-btn large"
              onClick={() => navigate("/find")}
            >
              <UserRound size={20} /> I need a ride <ArrowRight size={18} />
            </button>
            <button
              className="secondary-btn large"
              onClick={() => navigate("/offer")}
            >
              <Car size={20} /> I have a car
            </button>
          </div>
          <div className="trust-row">
            <span>
              <ShieldCheck size={16} /> Waymate verified
            </span>
            <span>
              <Users size={16} /> Student-only
            </span>
            <span>
              <MapPin size={16} /> Public pickup points
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="route-card floating-a">
            <div className="mini-avatar">AK</div>
            <div>
              <b>Ahmed</b>
              <span>Al Nahda → RIT Dubai</span>
            </div>
            <strong>92%</strong>
          </div>
          <div className="route-visual">
            <div className="pin home-pin">
              <HomeIcon size={18} />
            </div>
            <div className="dotted-route">
              <div className="route-dot"></div>
            </div>
            <div className="pin campus-pin">
              <span>RIT</span>
            </div>
            <div className="route-label">same way, shared ride</div>
          </div>
          <div className="route-card floating-b">
            <div className="seat-icon">
              <Users size={18} />
            </div>
            <div>
              <b>2 seats</b>
              <span>Available on this commute</span>
            </div>
            <span className="verified-dot">
              <Check size={14} />
            </span>
          </div>
        </div>
      </section>

      <section className="how-strip">
        <div className="section-heading">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Four steps. That's it.</h2>
          </div>
          <button className="text-btn" onClick={() => navigate("/how")}>
            See how it works <ArrowRight size={16} />
          </button>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Enter your route",
              "Tell us where you're coming from and where you're going.",
            ],
            ["02", "Choose your time", "Set your departure time and schedule."],
            [
              "03",
              "Find a match",
              "We surface students traveling approximately your way.",
            ],
            ["04", "Connect", "Request a seat and coordinate the commute."],
          ].map(([n, t, d]) => (
            <div className="step" key={n}>
              <span className="step-no">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="problem-card">
          <span className="eyebrow">The problem</span>
          <h2>You're already going there. So is someone else.</h2>
          <p>
            Students make the same journey to and from their University every
            day, but finding someone on a similar route usually means digging
            through scattered WhatsApp groups.
          </p>
        </div>
        <div className="solution-card">
          <span className="eyebrow">The Waymate difference</span>
          <h2>Match your commute. Share the journey.</h2>
          <div className="pill-grid">
            <span>
              <MapPin size={14} /> Route
            </span>
            <span>
              <Clock3 size={14} /> Time
            </span>
            <span>
              <CalendarDays size={14} /> Schedule
            </span>
            <span>
              <Users size={14} /> Seats
            </span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Popular corridors</span>
            <h2>Where University students are already going</h2>
          </div>
        </div>
        <div className="corridor-grid">
          {corridors.map((c, i) => (
            <button
              className="corridor"
              key={c}
              onClick={() => navigate("/find")}
            >
              <span>
                {["Ajman", "Sharjah", "Al Nahda", "Al Qusais", "DSO"][i]}
              </span>
              <Route size={18} />
              <b>RIT Dubai</b>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </section>

      <section className="content-section alt">
        <div className="section-heading">
          <div>
            <span className="eyebrow">One-time rides</span>
            <h2>Going somewhere today?</h2>
          </div>
          <button className="text-btn" onClick={() => navigate("/find")}>
            View all <ArrowRight size={16} />
          </button>
        </div>
        <div className="one-time-grid">
          {oneTime.map((r) => (
            <div className="compact-ride" key={r.id}>
              <div className="compact-top">
                <span className="date-badge">{r.date}</span>
                <span className="match-small">{r.match}% match</span>
              </div>
              <h3>
                {r.from} <ArrowRight size={15} /> {r.to}
              </h3>
              <div className="meta">
                <span>
                  <Clock3 size={15} />
                  {r.time}
                </span>
                <span>
                  <Users size={15} />
                  {r.seats} seats
                </span>
              </div>
              <button className="link-btn" onClick={() => navigate("/find")}>
                See ride <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="safety-banner">
        <div>
          <span className="eyebrow">Built around trust</span>
          <h2>Student-to-student, with safety built in.</h2>
          <p>
            University verification, public pickup points, preferences, ratings
            and reporting are part of the experience.
          </p>
        </div>
        <button className="secondary-btn" onClick={() => navigate("/safety")}>
          Explore safety <ArrowRight size={17} />
        </button>
      </section>

      <section className="final-cta">
        <span className="eyebrow">Your commute, made simpler</span>
        <h2>Your next ride might already be on the way.</h2>
        <div>
          <button className="primary-btn" onClick={() => navigate("/find")}>
            Find a ride <ArrowRight size={17} />
          </button>
          <button className="secondary-btn" onClick={() => navigate("/offer")}>
            Share my commute
          </button>
        </div>
      </section>
    </div>
  );
}
