import { useEffect, useState } from "react";
import reactLogo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    void (async () => {
      const result = await fetch(
        process.env.REACT_APP_API_URL +
          "?token=" +
          process.env.REACT_APP_API_TOKEN
      );
      if (result) {
        const json = await result.json();

        if (json) setData(json);
        else setData(null);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="/" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            width={250}
          />
        </a>
      </div>
      <h1>{data ? data.msg : "No data yet."}</h1>
      <div className="card">
        {data
          ? data.data
            ? data.data
            : "Setup API token"
          : "Waiting for fetch to finish."}
      </div>
    </div>
  );
}

export default App;
