import React from "react";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
          alt=""
        />
        <h1>Stan</h1>
        <h3>820k followers</h3>
      </div>
      <div className="profile__topRight">
        <i class="fas fa-heart"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
}
