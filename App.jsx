import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Explore from "./Explore";
import Login from "./Login";
import MyJournal from "./MyJournal";
import AddTrip from "./AddTrip";
import "./style.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <header className="navbar">
          <h1 className="logo">Travel Journal</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/my-journal"
              element={
                <ProtectedRoute>
                  <MyJournal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-trip"
              element={
                <ProtectedRoute>
                  <AddTrip />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}


