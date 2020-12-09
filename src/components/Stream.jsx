import React from "react";
import "../styles/Stream.css";

export default function Stream() {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">OFFLINE</div>
              <h2>Checkout the below streams from Stilbo Tech</h2>
              <div className="stream__statusInfo">
                <i class="fas fa-bell"></i>
                <p>You will be notified when Stilbo Tech is live</p>
              </div>
            </div>
          </div>
          <div className="stream__videoEmbed">
            <iframe
              width="500"
              height="295"
              src="https://www.youtube.com/embed/_NuPJmiQh-A"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
