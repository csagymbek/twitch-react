import React from "react";
import "../styles/Sidebar.css";
import Channel from "./Channel";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://avatars0.githubusercontent.com/u/43115122?s=460&u=63e0d46721cbdb324d204c461a47f0dc0d3b5840&v=4"
          name="Stilbo Tech"
          followers="820k"
        />
        <Channel
          avatar="https://avatars0.githubusercontent.com/u/43115122?s=460&u=63e0d46721cbdb324d204c461a47f0dc0d3b5840&v=4"
          name="Stilbo Tech"
          followers="220k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://avatars0.githubusercontent.com/u/43115122?s=460&u=63e0d46721cbdb324d204c461a47f0dc0d3b5840&v=4"
          name="Stilbo Tech"
          followers="10k"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to add friends" />
        </div>
      </div>
    </div>
  );
}
