import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock3,
  CalendarDays,
  Users,
  Check,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function RideDetails() {
  const { rides, requestSeat } = useApp();
  const { id } = useParams();
  const navigate = useNavigate();
  const ride = rides.find((r) => String(r.id) === id);
  const [requested, setRequested] = useState(false);

  if (!ride) {
    return (
      <div className="page-shell narrow">
        <button className="back-link" onClick={() => navigate("/find")}>
          <ArrowLeft size={16} /> Back to rides
        </button>
        <p>We couldn't find that ride. It may no longer be available.</p>
      </div>
    );
  }

  const submit = () => {
    setRequested(true);
    requestSeat(ride);
    navigate("/commutes");
  };

  return (
    <div className="page-shell narrow">
      <button className="back-link" onClick={() => navigate("/find")}>
        <ArrowLeft size={16} /> Back to rides
      </button>
      <div className="detail-header">
        <div className="person-avatar xl">
          {ride.driver
            .split(" ")
            .map((x) => x[0])
            .join("")}
        </div>
        <div>
          <div className="name-line">
            <h1>{ride.driver}</h1>
            <span className="verified">
              <ShieldCheck size={14} /> RIT verified
            </span>
          </div>
          <p>{ride.major}</p>
          <div className="rating">
            <Star size={16} fill="currentColor" /> {ride.rating} · {ride.trips}{" "}
            completed carpools
          </div>
        </div>
      </div>
      <div className="detail-grid">
        <div className="detail-card">
          <span className="eyebrow">Commute</span>
          <div className="big-route">
            <div>
              <span>From</span>
              <b>{ride.from}</b>
            </div>
            <ArrowRight />
            <div>
              <span>To</span>
              <b>{ride.to}</b>
            </div>
          </div>
          <div className="detail-stats">
            <span>
              <Clock3 /> {ride.time}
            </span>
            <span>
              <CalendarDays /> {ride.days}
            </span>
            <span>
              <Users /> {ride.seats} seats
            </span>
          </div>
        </div>
        <div className="detail-card match-detail">
          <span className="eyebrow">Why this matches</span>
          <div className="score">
            <strong>{ride.match}%</strong>
            <span>route match</span>
          </div>
          <ul>
            <li>
              <Check /> Similar starting area
            </li>
            <li>
              <Check /> Same destination
            </li>
            <li>
              <Check /> Compatible departure time
            </li>
            <li>
              <Check /> Same weekday schedule
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-card">
        <div className="cost-big">
          <div>
            <span>Estimated cost share</span>
            <strong>{ride.cost}</strong>
          </div>
          <p>
            Cost sharing helps split the expense of an existing journey. Waymate
            is not a taxi or commercial transportation service.
          </p>
        </div>
        <div className="pref-row">
          {ride.prefs.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
      <button
        className="primary-btn wide"
        onClick={submit}
        disabled={requested}
      >
        {requested ? (
          <>
            <Check /> Request sent
          </>
        ) : (
          <>
            Request a seat <ArrowRight />
          </>
        )}
      </button>
      <p className="privacy-note">
        <ShieldCheck size={15} /> Your exact home address and contact details
        aren't publicly shown.
      </p>
    </div>
  );
}
