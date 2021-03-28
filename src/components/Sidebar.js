import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  const _renderPlaylists = () =>
    playlists?.items?.map((playlist) => (
      <SidebarOption title={playlist.name} />
    ));
  console.log("playlists 🎶", playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.pngkey.com/png/full/788-7885953_we-distribute-playlist-for-spotify-logo-on-black.png"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />

      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {_renderPlaylists()}
    </div>
  );
};

export default Sidebar;
