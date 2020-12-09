import React from "react";
import "../styles/Body.css";
import Profile from "./Profile";

export default function Body() {
  return (
    <div className="body">
      <div className="body__left">
      <Profile />
      </div>
      <div className="body__rightPlaceholder">
      
      </div>
    </div>
  );
}
