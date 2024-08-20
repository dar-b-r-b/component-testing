import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Stranger");
  let inputName = "start";
  return (
    <>
      <h1 id="message">Hi, {name.length !== 0 ? name : "Stranger"}</h1>
      <label for="name">Enter your name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => (inputName = e.target.value)}
      ></input>
      <button onClick={() => setName(inputName)}>Introduce</button>
    </>
  );
}

export default App;
