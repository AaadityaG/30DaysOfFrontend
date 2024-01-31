import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100)
  }, [])

  return (
    <>
      <div>
        <h2>Progress Bar</h2>

        <ProgressBar value={value} />
      </div>
    </>
  );
}

export default App;
