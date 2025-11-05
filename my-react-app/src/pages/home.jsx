import { useNavigate } from "react-router-dom";
import bgGif from "../images/baseassets/melisacloset_home.gif";
import startImage from "../images/baseassets/Artboard 6.png";

function Home({ startTransition }) {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${bgGif})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <img
        src={startImage}
        alt="Start Game"
        style={styles.startImage}
        onClick={() => startTransition("/game")} // trigger fade + navigate
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  startImage: {
    width: "15vw",
    cursor: "pointer",
    marginTop: "50vh", // lower button
    transition: "transform 0.3s ease-in-out", // smooth hover scale
  },
};

export default Home;

