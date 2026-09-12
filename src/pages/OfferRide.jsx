import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock3, Users, Check, ArrowRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function OfferRide() {
  const { publish } = useApp();
  const navigate = useNavigate();
  const [from, setFrom] = useState("Al Nahda"),
    [to, setTo] = useState("RIT Dubai"),
    [time, setTime] = useState("7:30 AM"),
    [type, setType] = useState("Recurring"),
    [seats, setSeats] = useState(2),
    [prefs, setPrefs] = useState(["Students only", "No smoking"]);
  const toggle = (p) =>
    setPrefs((x) => (x.includes(p) ? x.filter((y) => y !== p) : [...x, p]));

  const handlePublish = () => {
    publish({
      from,
      to,
      time,
      days: type === "Recurring" ? "Sun–Thu" : "One-time",
      seats,
      prefs,
    });
    navigate("/commutes");
  };

  return (
    <div className="page-shell narrow">
      <div className="page-intro">
        <span className="eyebrow">Offer a ride</span>
        <h1>Share your commute.</h1>
        <p>
          You're already going there. Let another RIT student share the journey.
        </p>
      </div>
      <div className="offer-card">
        <div className="offer-section">
          <h3>Route</h3>
          <div className="form-grid two">
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
                  <option>Sharjah</option>
                  <option>Ajman</option>
                </select>
              </div>
            </label>
          </div>
        </div>
        <div className="offer-section">
          <h3>Schedule</h3>
          <div className="form-grid two">
            <label>
              <span>Departure</span>
              <div className="input-icon">
                <Clock3 size={17} />
                <input value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </label>
            <div>
              <span className="label-like">Ride type</span>
              <div className="segmented">
                <button
                  className={type === "Recurring" ? "active" : ""}
                  onClick={() => setType("Recurring")}
                >
                  Recurring
                </button>
                <button
                  className={type === "One-time" ? "active" : ""}
                  onClick={() => setType("One-time")}
                >
                  One-time
                </button>
              </div>
            </div>
          </div>
          {type === "Recurring" && (
            <div className="days">
              {["Sun", "Mon", "Tue", "Wed", "Thu"].map((d) => (
                <label key={d}>
                  <input type="checkbox" defaultChecked />
                  <span>{d}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="offer-section">
          <h3>Available seats</h3>
          <div className="seat-picker">
            {[1, 2, 3, 4].map((n) => (
              <button
                className={seats === n ? "active" : ""}
                onClick={() => setSeats(n)}
                key={n}
              >
                <Users size={17} />
                {n}
              </button>
            ))}
          </div>
        </div>
        <div className="offer-section">
          <h3>Preferences</h3>
          <div className="choice-grid">
            {[
              "Students only",
              "Women only",
              "Quiet ride",
              "No smoking",
              "Music okay",
            ].map((p) => (
              <button
                key={p}
                className={prefs.includes(p) ? "chosen" : ""}
                onClick={() => toggle(p)}
              >
                {prefs.includes(p) && <Check size={15} />} {p}
              </button>
            ))}
          </div>
        </div>
        <div className="cost-estimate">
          <div>
            <span>Estimated journey cost</span>
            <b>AED 30</b>
          </div>
          <div>
            <span>Suggested contribution</span>
            <b>AED 10–15 / passenger</b>
          </div>
        </div>
        <p className="legal">
          Cost-sharing arrangements are intended for existing journeys and
          should comply with applicable UAE transportation regulations and
          university policies. Waymate is not a licensed transportation
          provider.
        </p>
        <button className="primary-btn wide" onClick={handlePublish}>
          Publish commute <ArrowRight />
        </button>
      </div>
    </div>
  );
}
