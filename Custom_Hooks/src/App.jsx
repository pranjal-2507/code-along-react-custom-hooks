import React from "react";
import "./App.css";
import useStorage from "./CustomHooks/useStorage";

function App() {
  const { setStorage } = useStorage();

  return (
    <div>
      <h1>Custom Hooks</h1>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => setStorage(e.target.value)}
      />
    </div>
  );
}

export default App;
