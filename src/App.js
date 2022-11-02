import logo from "./logo.svg";
import "./App.css";
import GenderSelection from "./components/GenderSelection/GenderSelection";
import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GenderSelection />} />
        <Route path="/gender-selection" element={<GenderSelection />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
