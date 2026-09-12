# Waymate — RIT Dubai

A polished front-end prototype for a student-to-student cost-sharing carpooling platform.

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite local URL.

## Project structure

Each screen now lives in its own file with its own URL route (via `react-router-dom`), instead of one large file:

```
src/
  main.jsx              Entry point — sets up HashRouter + AppProvider
  App.jsx               Layout: header, routed content, footer, mobile nav
  context/
    AppContext.jsx       Shared app state (rides, requests, profile, theme, toast, actions)
  data/
    mockData.js           Fictional mock data (rides, one-time rides, corridors)
  components/
    Header.jsx
    Footer.jsx
    MobileNav.jsx
    RideCard.jsx
  pages/
    Home.jsx              "/"
    FindRide.jsx           "/find"
    RideDetails.jsx        "/ride/:id"
    OfferRide.jsx           "/offer"
    MyCommutes.jsx          "/commutes"
    Safety.jsx              "/safety"
    ProblemSolution.jsx     "/problem"
    HowItWorks.jsx          "/how"
    Profile.jsx             "/profile"
    Login.jsx               "/login"
  styles.css
```

Routing uses `HashRouter` (URLs like `#/find`) so the site works correctly on GitHub Pages without any server-side rewrite rules, and `vite.config.js` sets `base: "./"` so built assets load correctly at a project URL like `https://<user>.github.io/<repo>/`.

## Included flows

- Landing page
- Find a ride
- Route/time search
- Match scoring and explanations
- Ride details
- Request a seat
- Offer a ride
- Recurring / one-time commute creation
- My Commutes
- Driver request acceptance
- Student profile
- RIT verification UI
- Safety center
- Ratings/profile trust indicators
- Responsive mobile navigation
- Fictional mock data

No backend or real payments are used.
