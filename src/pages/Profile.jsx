import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Profile() {
  const { profile } = useApp();
  const [editing, setEditing] = useState(false);
  return (
    <div className="page-shell narrow">
      <div className="page-intro">
        <span className="eyebrow">Profile</span>
        <h1>Your student profile.</h1>
        <p>
          Only the information useful for building trust is shown to other
          students.
        </p>
      </div>
      <div className="profile-card-large">
        <div className="profile-top">
          <div className="person-avatar xl">FS</div>
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.major}</p>
            <span className="verified">
              <ShieldCheck size={14} /> Waymate verified
            </span>
          </div>
          <button
            className="secondary-btn small"
            onClick={() => setEditing(!editing)}
          >
            {editing ? "Save" : "Edit profile"}
          </button>
        </div>
        <div className="profile-stats">
          <div>
            <b>⭐ {profile.rating}</b>
            <span>Rating</span>
          </div>
          <div>
            <b>{profile.trips}</b>
            <span>Completed carpools</span>
          </div>
          <div>
            <b>Sun–Thu</b>
            <span>Typical schedule</span>
          </div>
        </div>
        <div className="profile-prefs">
          <h3>Ride preferences</h3>
          <div className="pref-row">
            <span>Students only</span>
            <span>No smoking</span>
            <span>Quiet ride</span>
          </div>
        </div>
      </div>
    </div>
  );
}
