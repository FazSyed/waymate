import React, { createContext, useContext, useEffect, useState } from "react";
import { initialRides } from "../data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [rides, setRides] = useState(initialRides);
  const [toast, setToast] = useState("");
  const [requests, setRequests] = useState([]);
  const [myCommutes, setMyCommutes] = useState([]);
  const [profile, setProfile] = useState({
    name: "Fazilah Syed",
    major: "Computer Science",
    verified: true,
    rating: 4.9,
    trips: 9,
  });
  const [loggedIn, setLoggedIn] = useState(true);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("waymate-theme");
      if (saved) return saved;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        return "dark";
    } catch (e) {}
    return "light";
  });

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 2800);
      return () => clearTimeout(t);
    }
  }, [toast]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("waymate-theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const requestSeat = (ride) => {
    setRequests((r) => [
      ...r,
      {
        id: Date.now(),
        rideId: ride.id,
        student: profile.name,
        status: "Pending",
      },
    ]);
    setToast("Request sent — we'll let you know when the driver responds.");
  };

  const publish = (data) => {
    const commute = { id: Date.now(), ...data, status: "Live", requests: 0 };
    setMyCommutes((c) => [commute, ...c]);
    setToast("Your commute is live.");
  };

  const acceptRequest = (id) => {
    setRequests((r) =>
      r.map((x) => (x.id === id ? { ...x, status: "Accepted" } : x)),
    );
    setToast("Request accepted — you're matched!");
  };

  const ridesLabel = (id) => {
    const r = rides.find((x) => x.id === id);
    return r ? `${r.driver} · ${r.from} → ${r.to}` : "Commute details";
  };

  const value = {
    rides,
    setRides,
    toast,
    setToast,
    requests,
    myCommutes,
    profile,
    setProfile,
    loggedIn,
    setLoggedIn,
    theme,
    toggleTheme,
    requestSeat,
    publish,
    acceptRequest,
    ridesLabel,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an AppProvider");
  return ctx;
}
