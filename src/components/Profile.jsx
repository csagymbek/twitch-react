import React from "react";
import "../styles/Profile.css";
import RecentItem from "./RecentItem";
import Stream from "./Stream";

export default function Profile() {
  return (
    <div className="profile">
      <Stream />
      <div className="profile__topLeft">
        <img
          src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
          alt=""
        />
        <h1>Stan</h1>
        <h3>820k followers</h3>
      </div>

      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i>
        <i className="fas fa-bell graybg"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>

      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>

      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url="https://www.youtube.com/embed/7_Qar4Z0ttQ"
            title="METRO EXODUS Walkthrough Gameplay Part 1 - INTRO (Xbox One X)"
          />
          <RecentItem
            url="https://www.youtube.com/embed/xDILZFGwi8g"
            title="METRO EXODUS Walkthrough Gameplay Part 2 - WINTER (Xbox One X)"
          />
          <RecentItem
            url="https://www.youtube.com/embed/Lo3qu9Vasbs"
            title="METRO EXODUS Walkthrough Gameplay Part 3 - MUTANTS (Xbox One X)"
          />
          <RecentItem
            url="https://www.youtube.com/embed/SRMdakl8KUc"
            title="METRO EXODUS Walkthrough Gameplay Part 4 - ARTYOM (Xbox One X)
            "
          />
        </div>
        <div className="profile__categories">
          <h2>Recently streamed categories</h2>
          <img
            src="https://assets-prd.ignimgs.com/2020/07/24/stalker-2-button-002-1595562314851.jpg"
            alt=""
          />
          <h3>PC & Xbox</h3>
        </div>
      </div>
    </div>
  );
}
