import React from "react";
import { Flag, ClipboardList, Lightbulb, Sparkles, Check } from "lucide-react";

export default function ProblemSolution() {
  return (
    <div className="page-shell narrow">
      <div className="page-intro">
        <span className="eyebrow">Problem & Solution</span>
        <h1>Why Waymate exists.</h1>
        <p>
          The problem, the research behind it, the solution, and why it matters.
        </p>
      </div>

      <section className="ps-block">
        <div className="ps-heading">
          <span className="ps-icon">
            <Flag size={18} />
          </span>
          <h2>The problem</h2>
        </div>
        <p>
          Every day, hundreds of university students make nearly identical
          journeys to and from campus, from clusters like Al Nahda, Al Qusais,
          Sharjah, Ajman and Dubai Silicon Oasis, often at nearly identical
          times. Most travel alone in a private car or pay for a solo
          ride-hailing trip, while a classmate living two streets away makes the
          exact same trip minutes later. Today, the only way to coordinate a
          shared ride is through scattered WhatsApp groups, which are hard to
          search, easy to lose track of, and offer no way to verify who you're
          actually getting into a car with.
        </p>
      </section>

      <section className="ps-block">
        <div className="ps-heading">
          <span className="ps-icon">
            <ClipboardList size={18} />
          </span>
          <h2>Mini research</h2>
        </div>
        <p>
          This problem came from firsthand experience relying on my university's
          transport service, plus conversations with other students who ran into
          the same wall. A few specifics stood out:
        </p>
        <ul className="ps-stats">
          <li>
            The university bus only runs <strong>two drop-off timings</strong> a
            day, both late enough that they line up with the worst of Dubai's
            traffic, adding significant time to an already long commute.
          </li>
          <li>
            Outside those two timings, the only other university transport
            option drops students at a <strong>metro station, not home</strong>{" "}
            — which just shifts the problem into a second leg of the trip
            instead of solving it.
          </li>
          <li>
            Private transport (taxis or ride-hailing) fills the gap, but doing
            that daily is <strong>expensive to sustain</strong> as a student.
          </li>
          <li>
            Talking to classmates confirmed this isn't an isolated frustration.
            Several students described the exact same routine of waiting out bad
            timings or paying for a private ride, but with{" "}
            <strong>no shared route overlap dense enough</strong> to make
            informal carpooling easy to arrange on their own.
          </li>
        </ul>
      </section>

      <section className="ps-block">
        <div className="ps-heading">
          <span className="ps-icon">
            <Lightbulb size={18} />
          </span>
          <h2>The solution</h2>
        </div>
        <p>
          Waymate is a student-only, cost-sharing carpool platform built
          specifically around the university commute. Instead of scrolling
          through group chats, a student enters their route and time once, and
          Waymate surfaces classmates already going the same way, ranked by
          route, schedule and time compatibility, with an explanation of why
          each match fits.
        </p>
        <ul className="ps-list">
          <li>
            <Check size={16} /> Route and time-based matching, not endless
            manual searching
          </li>
          <li>
            <Check size={16} /> Waymate student verification before anyone can
            post or ride
          </li>
          <li>
            <Check size={16} /> Public pickup points, ratings and reporting
            built into every ride
          </li>
          <li>
            <Check size={16} /> Support for both recurring commutes and one-time
            trips
          </li>
        </ul>
      </section>

      <section className="ps-block highlight">
        <div className="ps-heading">
          <span className="ps-icon">
            <Sparkles size={18} />
          </span>
          <h2>Why it matters</h2>
        </div>
        <p>
          Cutting commute costs by splitting a journey students are already
          making frees up part of a tight student budget for the things that
          actually need it: tuition materials, food, savings. It also turns an
          isolating, repetitive trip into a small daily point of connection
          between students who might never otherwise meet. And every shared ride
          is one fewer car making the same trip alone, which adds up across a
          whole campus. Waymate doesn't try to replace transport in Dubai — it
          makes better use of the trips students are already taking.
        </p>
      </section>
    </div>
  );
}
