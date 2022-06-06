import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router";

function App() {
  const [name, setName] = useState("");

  return <Router name={name} setName={setName} />;
}

export default App;
