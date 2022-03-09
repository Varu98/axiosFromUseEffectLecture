import React from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  axios.get("/api/users/").then((Response) => console.log(Response));
  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick> Click to load data from server </button>
    </div>
  );
}
