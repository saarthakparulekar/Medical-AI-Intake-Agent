import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bots from "./pages/Bots";
import Logs from "./pages/Logs";
import "./App.css"
function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          <Link to="/bots">Bots</Link>
          <Link to="/logs">Logs</Link>
        </nav>
        <Routes>
          <Route path="/bots" element={<Bots />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/" element={<h2>Welcome to Medical Intake Agent Dashboard</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

