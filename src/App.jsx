import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { useApp } from "./context/AppContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import Home from "./pages/Home";
import FindRide from "./pages/FindRide";
import RideDetails from "./pages/RideDetails";
import OfferRide from "./pages/OfferRide";
import MyCommutes from "./pages/MyCommutes";
import Safety from "./pages/Safety";
import ProblemSolution from "./pages/ProblemSolution";
import HowItWorks from "./pages/HowItWorks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const { toast } = useApp();

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<FindRide />} />
          <Route path="/ride/:id" element={<RideDetails />} />
          <Route path="/offer" element={<OfferRide />} />
          <Route path="/commutes" element={<MyCommutes />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/problem" element={<ProblemSolution />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {toast && (
        <div className="toast">
          <CircleCheck size={20} />
          {toast}
        </div>
      )}
      <MobileNav />
    </div>
  );
}
