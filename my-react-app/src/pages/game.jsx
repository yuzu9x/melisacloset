import { useState } from "react";
import gameBg from "../images/baseassets/Artboard 5.png";

// Import images
import H1Img from "../images/baseassets/Artboard 7.png";
import H2Img from "../images/baseassets/Artboard 8.png";
import H3Img from "../images/baseassets/Artboard 9.png";

import A1Img from "../images/baseassets/Artboard 10.png";
import A2Img from "../images/baseassets/Artboard 11.png";
import A3Img from "../images/baseassets/Artboard 12.png";

import D1Img from "../images/baseassets/Artboard 19.png";
import D2Img from "../images/baseassets/Artboard 20.png";
import D3Img from "../images/baseassets/Artboard 21.png";

import Sx1Img from "../images/baseassets/Artboard 13.png";
import Sx2Img from "../images/baseassets/Artboard 14.png";
import Sx3Img from "../images/baseassets/Artboard 15.png";

import Sh1Img from "../images/baseassets/Artboard 16.png";
import Sh2Img from "../images/baseassets/Artboard 17.png";
import Sh3Img from "../images/baseassets/Artboard 18.png";

function Game() {
  const [placedItems, setPlacedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Shelf positions for the clothes
  const itemPositions = {
    accessory: [
      { top: "130px", left: "970px" },
      { top: "130px", left: "1100px", width: "15vh" },
      { top: "140px", left: "1280px", width: "20vh" },
    ],
    dress: [
      { top: "250px", left: "930px", width: "20vh" },
      { top: "250px", left: "1100px", width: "20vh" },
      { top: "250px", left: "1260px", width: "20vh" },
    ],
    socks: [
      { top: "540px", left: "1000px" },
      { top: "580px", left: "1170px" },
      { top: "540px", left: "1330px" },
    ],
    shoes: [
      { top: "810px", left: "980px", width: "5%" },
      { top: "810px", left: "1150px", width: "5%" },
      { top: "790px", left: "1320px", width: "5%" },
    ],
    hairstyles: [
      { top: "200px", left: "1530px", width: "7%" },
      { top: "400px", left: "1530px", width: "7%" },
      { top: "600px", left: "1530px", width: "7%" },
    ],
  };

  // Default display positions for each on the mannequins!!!
  const defaultDisplayPositions = {
    H1Img: { top: 190, left: 460, width: 150 },
    H2Img: { top: 197, left: 475, width: 115 },
    H3Img: { top: 186, left: 490, width: 150 },
    A1Img: { top: 310, left: 500, width: 80 },
    A2Img: { top: 485, left: 465, width: 170 },
    A3Img: { top: 260, left: 490, width: 90 },
    D1Img: { top: 250, left: 460, width: 200 },
    D2Img: { top: 260, left: 460, width: 200 },
    D3Img: { top: 270, left: 460, width: 200 },
    Sx1Img: { top: 400, left: 460, width: 90 },
    Sx2Img: { top: 410, left: 460, width: 90 },
    Sx3Img: { top: 420, left: 460, width: 90 },
    Sh1Img: { top: 470, left: 460, width: 90 },
    Sh2Img: { top: 480, left: 460, width: 90 },
    Sh3Img: { top: 490, left: 460, width: 90 },
  };

  const items = {
    hairstyles: [
      { img: H1Img, name: "H1Img" },
      { img: H2Img, name: "H2Img" },
      { img: H3Img, name: "H3Img" },
    ],
    accessory: [
      { img: A1Img, name: "A1Img" },
      { img: A2Img, name: "A2Img" },
      { img: A3Img, name: "A3Img" },
    ],
    dress: [
      { img: D1Img, name: "D1Img" },
      { img: D2Img, name: "D2Img" },
      { img: D3Img, name: "D3Img" },
    ],
    socks: [
      { img: Sx1Img, name: "Sx1Img" },
      { img: Sx2Img, name: "Sx2Img" },
      { img: Sx3Img, name: "Sx3Img" },
    ],
    shoes: [
      { img: Sh1Img, name: "Sh1Img" },
      { img: Sh2Img, name: "Sh2Img" },
      { img: Sh3Img, name: "Sh3Img" },
    ],
  };

  const handleShelfClick = (itemObj, category) => {
    const defaultPos = defaultDisplayPositions[itemObj.name];
    
    const newItem = {
      id: Date.now(),
      category: category,
      img: itemObj.img,
      name: itemObj.name,
      top: defaultPos.top,
      left: defaultPos.left,
      width: defaultPos.width,
    };
    
    setPlacedItems([...placedItems, newItem]);
  };

  const handleItemClick = (e, itemId) => {
    e.stopPropagation();
    setSelectedItemId(selectedItemId === itemId ? null : itemId);
  };

  const updateItemPosition = (itemId, property, value) => {
    setPlacedItems(
      placedItems.map((item) =>
        item.id === itemId ? { ...item, [property]: parseFloat(value) } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setPlacedItems(placedItems.filter((item) => item.id !== itemId));
    setSelectedItemId(null);
  };

  const clearAll = () => {
    setPlacedItems([]);
    setSelectedItemId(null);
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${gameBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <button style={styles.clearButton} onClick={clearAll}>
        CLEAR
      </button>

      {/* Shelf items - clickable to add to canvas */}
      {["accessory", "dress", "socks", "shoes"].map((category) =>
        items[category].map((itemObj, index) => (
          <img
            key={`${category}-${index}`}
            src={itemObj.img}
            alt={category}
            onClick={() => handleShelfClick(itemObj, category)}
            style={{
              ...styles.itemThumbnail,
              position: "absolute",
              ...itemPositions[category][index],
            }}
          />
        ))
      )}

      {/* Hairstyles on shelf */}
      {items.hairstyles.map((itemObj, index) => (
        <img
          key={`hair-${index}`}
          src={itemObj.img}
          alt="hairstyle"
          onClick={() => handleShelfClick(itemObj, "hairstyle")}
          style={{
            ...styles.hairThumbnail,
            position: "absolute",
            ...itemPositions.hairstyles[index],
          }}
        />
      ))}

      {/* Placed items on canvas */}
      {placedItems.map((item) => (
        <div key={item.id} style={{ position: "absolute" }}>
          <img
            src={item.img}
            alt={item.name}
            onClick={(e) => handleItemClick(e, item.id)}
            style={{
              position: "absolute",
              top: `${item.top}px`,
              left: `${item.left}px`,
              width: `${item.width}px`,
              cursor: "pointer",
              border: selectedItemId === item.id ? "2px solid #00ff00" : "2px solid transparent",
              zIndex: selectedItemId === item.id ? 1000 : item.top,
            }}
          />
        </div>
      ))}

      {/* Control panel for selected item */}
      {selectedItemId && (
        <div style={styles.controlPanel}>
          {(() => {
            const item = placedItems.find((i) => i.id === selectedItemId);
            return (
              <>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                  {item.name}
                </h3>
                
                <label style={styles.label}>
                  Top: {item.top}px
                  <input
                    type="range"
                    min="0"
                    max="900"
                    value={item.top}
                    onChange={(e) => updateItemPosition(item.id, "top", e.target.value)}
                    style={styles.slider}
                  />
                </label>

                <label style={styles.label}>
                  Left: {item.left}px
                  <input
                    type="range"
                    min="0"
                    max="1800"
                    value={item.left}
                    onChange={(e) => updateItemPosition(item.id, "left", e.target.value)}
                    style={styles.slider}
                  />
                </label>

                <label style={styles.label}>
                  Width: {item.width}px
                  <input
                    type="range"
                    min="50"
                    max="400"
                    value={item.width}
                    onChange={(e) => updateItemPosition(item.id, "width", e.target.value)}
                    style={styles.slider}
                  />
                </label>

                <button
                  onClick={() => removeItem(item.id)}
                  style={styles.removeButton}
                >
                  REMOVE ITEM
                </button>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Courier New', monospace",
    fontSize: "20px",
    color: "white",
  },
  clearButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "10px 20px",
    fontSize: "14px",
    fontFamily: "'Courier New', monospace",
  },
  itemThumbnail: {
    width: "90px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  hairThumbnail: {
    width: "120px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  controlPanel: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    border: "2px solid white",
    padding: "15px",
    minWidth: "250px",
    color: "white",
    fontFamily: "'Courier New', monospace",
    fontSize: "12px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "11px",
  },
  slider: {
    width: "100%",
    display: "block",
    marginTop: "5px",
  },
  removeButton: {
    backgroundColor: "#ff0000",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "8px 12px",
    width: "100%",
    marginTop: "10px",
    fontFamily: "'Courier New', monospace",
    fontSize: "11px",
  },
};

export default Game;