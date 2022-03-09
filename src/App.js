import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  // useState Variables
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  // Click Handler Function
  async function clickHandler() {
    try {
      setLoader(true);
      const getData = await axios.get("/api/users");
      const userData = await getData.data.users;

      setData(userData);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick={clickHandler}> Click to load data from server </button>
      {(loader && <p>Loading...</p>) ||
        data.map((users) => <p>{users.name}</p>)}
    </div>
  );
}
