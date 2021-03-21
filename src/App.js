import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import { useDataLayerValue } from "./components/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // Dispatch SET_TOKEN action to set token into the context
      dispatch({ type: "SET_TOKEN", payload: _token });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // Dispatch SET_USER action to set token into the context
        dispatch({ type: "SET_USER", payload: user });
      });
    }
  }, []);

  console.log("user 🤘", user);
  console.log("token 🔑", token);
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
