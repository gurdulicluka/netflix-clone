import React from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
