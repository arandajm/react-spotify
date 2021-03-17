import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="App">
      {token ? (
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
