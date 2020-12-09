import React from "react";
import "../styles/RecentItem.css";

export default function RecentItem({ url, title }) {
  return (
    <div className="recentItem">
      <iframe
        width="400"
        height="235 "
        src={url}
        // src="https://www.youtube.com/embed/7_Qar4Z0ttQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="recentItem__details">
        <img
          src="https://steamcdn-a.akamaihd.net/steam/apps/412020/capsule_616x353.jpg?t=1600359844"
          alt=""
        />
        <div className="recentItem__detailsText">
          <h4>{title}</h4>
          <p>Stilbo Tech</p>
          <p>Gaming & Streaming</p>
        </div>
      </div>
    </div>
  );
}
