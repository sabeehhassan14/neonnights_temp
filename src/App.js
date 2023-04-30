import { useEffect } from "react";
import "./App.css";
import "./styles/global.scss";
import Home from "./views/Home";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
