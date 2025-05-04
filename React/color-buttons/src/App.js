import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(["red", "blue", "green"]);
  }, []);

  const clickTimeout = useRef(null);

  const handleButtonClick = (color) => {
    clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      const element = document.getElementById("body-ele");
      element.style.backgroundColor = color;
    }, 300);
  };

  const handleAddClick = () => {
    const formattedInput = input.toLowerCase();
    if (formattedInput == "") return;
    else if (colors.includes(formattedInput)) {
      alert("Color already exists.");
      return;
    }
    setColors([...colors, formattedInput]);
  };

  const handleDoubleClick = (e) => {
    clearTimeout(clickTimeout.current);
    const value = e.target.value;
    const filteredColors = colors.filter((color) => color != value);
    setColors(filteredColors);
  };

  return (
    <>
      <div>
        <marquee>
          Please enter valid color. Double click on color button to remove
        </marquee>
      </div>
      <div className="App">
        <input
          type="text"
          placeholder="Enter color button to add..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => handleButtonClick(color)}
            onDoubleClick={handleDoubleClick}
            style={{
              margin: "1px",
              fontWeight: "bold",
              border: "1px solid black",
            }}
            value={color}
          >
            {color.charAt(0).toUpperCase() + color.split("").slice(1).join("")}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
