import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
  zIndex: 9999,
  pointerEvents: "none",
  transition: "opacity 0.8s ease-in-out",
};

function FadeTransition() {
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Fade in (white screen)
    setShow(true);

    // Then fade out to reveal page content
    const timeout = setTimeout(() => {
      setShow(false);
    }, 200); // small delay so it appears instantly on route load

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div
      style={{
        ...overlayStyle,
        opacity: show ? 1 : 0,
      }}
    />
  );
}

export default FadeTransition;
