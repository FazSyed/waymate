import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CalendarDays,
  Clock3,
  SlidersHorizontal,
  Search,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import RideCard from "../components/RideCard";

export default function FindRide() {
  const { rides } = useApp();
  const navigate = useNavigate();
  const [from, setFrom] = useState("Al Nahda"),
    [to, setTo] = useState("RIT Dubai"),
    [time, setTime] = useState("7:30 AM"),
    [flex, setFlex] = useState(30),
    [type, setType] = useState("Recurring"),
    [sort, setSort] = useState("Best match");
  const [filters, setFilters] = useState(false);
  const results = useMemo(
    () =>
      [...rides].sort((a, b) =>
        sort === "Best match"
          ? b.match - a.match
          : sort === "Time"
            ? a.time.localeCompare(b.time)
            : a.match - b.match,
      ),
    [rides, sort],
  );
  const submit = (e) => e.preventDefault();
  return (
    <div className="page-shell">
      <div className="page-intro">
        <button className="back-link" onClick={() => navigate("/")}>
          <ArrowLeft size={16} /> Home
        </button>
        <span className="eyebrow">Find a ride</span>
        <h1>Find someone going your way.</h1>
        <p>
          Tell us your route and time. We'll show compatible University
          carpools.
        </p>
      </div>
      <form className="search-panel" onSubmit={submit}>
        <div className="direction-toggle">
          <button
            type="button"
            className={to === "RIT Dubai" ? "selected" : ""}
            onClick={() => {
              setFrom("Al Nahda");
              setTo("RIT Dubai");
            }}
          >
            Home → RIT Dubai
          </button>
          <button
            type="button"
            className={from === "RIT Dubai" ? "selected" : ""}
            onClick={() => {
              setFrom("RIT Dubai");
              setTo("Al Nahda");
            }}
          >
            RIT Dubai → Home
          </button>
        </div>
        <div className="form-grid">
          <label>
            <span>From</span>
            <div className="input-icon">
              <MapPin size={17} />
              <select value={from} onChange={(e) => setFrom(e.target.value)}>
                <option>Al Nahda</option>
                <option>Al Qusais</option>
                <option>Muhaisnah</option>
                <option>Sharjah</option>
                <option>Ajman</option>
                <option>Dubai Silicon Oasis</option>
                <option>Deira</option>
                <option>Jumeirah</option>
                <option>Dubai Marina</option>
                <option>RIT Dubai</option>
              </select>
            </div>
          </label>
          <label>
            <span>To</span>
            <div className="input-icon">
              <MapPin size={17} />
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                <option>RIT Dubai</option>
                <option>Al Nahda</option>
                <option>Al Qusais</option>
                <option>Sharjah</option>
                <option>Ajman</option>
                <option>Dubai Marina</option>
                <option>RIT Dubai</option>
              </select>
            </div>
          </label>
          <label>
            <span>Date</span>
            <div className="input-icon">
              <CalendarDays size={17} />
              <select>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Custom date</option>
              </select>
            </div>
          </label>
          <label>
            <span>Departure</span>
            <div className="input-icon">
              <Clock3 size={17} />
              <input value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </label>
        </div>
        <div className="search-bottom">
          <div className="flex-control">
            <span>Flexibility</span>
            <button
              type="button"
              className={flex === 15 ? "" : "active"}
              onClick={() => setFlex(30)}
            >
              ± 30 min
            </button>
            <button
              type="button"
              className={flex === 15 ? "active" : ""}
              onClick={() => setFlex(15)}
            >
              ± 15 min
            </button>
          </div>
          <div className="ride-type">
            <button
              type="button"
              className={type === "Recurring" ? "active" : ""}
              onClick={() => setType("Recurring")}
            >
              Recurring
            </button>
            <button
              type="button"
              className={type === "One-time" ? "active" : ""}
              onClick={() => setType("One-time")}
            >
              One-time
            </button>
          </div>
          <button className="primary-btn">
            <Search size={18} /> Find rides
          </button>
        </div>
      </form>
      <div className="results-head">
        <div>
          <span className="eyebrow">Compatible rides</span>
          <h2>{results.length} rides found</h2>
        </div>
        <div className="result-actions">
          <button className="filter-btn" onClick={() => setFilters(!filters)}>
            <SlidersHorizontal size={17} /> Filters
          </button>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Best match</option>
            <option>Time</option>
            <option>Lowest cost</option>
          </select>
        </div>
      </div>
      {filters && (
        <div className="filter-panel">
          <span>Preferences</span>
          <button>Students only</button>
          <button>Women only</button>
          <button>No smoking</button>
          <button>Quiet ride</button>
        </div>
      )}
      <div className="ride-list">
        {results.map((r) => (
          <RideCard
            key={r.id}
            ride={r}
            open={() => navigate(`/ride/${r.id}`)}
          />
        ))}
      </div>
      <div className="empty-help">
        <div className="help-icon">⌁</div>
        <div>
          <h3>Don't see your exact route?</h3>
          <p>
            Try widening your departure time or pickup area. Waymate matches
            nearby routes too.
          </p>
        </div>
        <button className="text-btn">
          Adjust search <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
