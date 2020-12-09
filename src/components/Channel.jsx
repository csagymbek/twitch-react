import React from "react";
import "../styles/Channel.css";

export default function Channel({ avatar, name, followers }) {
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt={name} />
        <p>{name}</p>
      </div>    
      <p>{followers}</p>
    </div>
  );
}
