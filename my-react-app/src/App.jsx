import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";

// Fade wrapper component
function FadeRoutes() {
  const location = useLocation();
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const [pendingPath, setPendingPath] = useState(null);

  // Trigger fade when pendingPath changes
  useEffect(() => {
    if (pendingPath) {
      setFade(true); // fade to white
      const timeout = setTimeout(() => {
        navigate(pendingPath);
        setFade(false); // fade out
        setPendingPath(null);
      }, 800); // duration matches CSS
      return () => clearTimeout(timeout);
    }
  }, [pendingPath, navigate]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 9999,
          pointerEvents: "none",
          transition: "opacity 0.8s ease-in-out",
          opacity: fade ? 1 : 0,
        }}
      />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home startTransition={(path) => setPendingPath(path)} />}
        />
        <Route
          path="/game"
          element={<Game startTransition={(path) => setPendingPath(path)} />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename="/melisacloset">
      <FadeRoutes />
    </Router>
  );
}

export default App;

