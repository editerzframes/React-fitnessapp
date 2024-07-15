import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Login from "./screens/auth/Login";
import Dashboard from "./screens/main/Dashboard/Dashboard";
import useToken from "./components/useToken";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { token, setToken, userData } = useToken();

  return (
    <Router>
      <Nav />
      <Routes>
        {!token ? (
          <Route path="/login" element={<Login setToken={setToken} />} />
        ) : (
          <Route path="*" element={<Navigate to="/dashboard" />} />
        )}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
