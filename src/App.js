import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import { useDataLayerValue } from "./components/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";

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

      spotify.getUserPlaylists().then((playlists) => {
        console.log({ playlists });
        // Dispatch SET_USER_PLAYLISTS action to set token into the context
        dispatch({ type: "SET_USER_PLAYLISTS", payload: playlists });
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("user 🤘", user);
  console.log("token 🔑", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
