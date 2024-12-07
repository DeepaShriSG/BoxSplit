import { useState } from "react";

function Square({ size, handleSplit }) {
  return (
    <>
      <div
        className="square"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
        onClick={handleSplit}></div>
    </>
  );
}

function SplitSquare({ size, level = 0 }) {
  const [split, setSplit] = useState(false);

  const handleSplit = () => setSplit(true);

  if (split) {
    let newSize = size / 2;
    return (
      <>
        <div
          className="square-container"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            display: "flex",
            flexWrap: "wrap",
          }}
          onClick={handleSplit}>
          {Array(4)
            .fill(null)
            .map((_, index) => {
              return (
                <>
                  <SplitSquare key={index} size={newSize} level={level + 1} />
                </>
              );
            })}
        </div>
      </>
    );
  }

  return (
    <>
      <Square size={size} handleSplit={handleSplit} />
    </>
  );
}

function App() {
  const size = "400";
  return (
    <>
      <div className="app">
        <h3>Box Split</h3>
        <SplitSquare size={size} />
      </div>
    </>
  );
}

export default App;
