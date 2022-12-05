import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    void (async () => {
      const result = await fetch(
        import.meta.env.VITE_API_URL +
          "?token=" +
          import.meta.env.VITE_API_TOKEN
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
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{data && data.msg}</h1>
      <div className="card">
        {data && data.data ? data.data : "Setup API token"}
      </div>
    </div>
  );
}

export default App;
