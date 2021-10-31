import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function() {
  return (
    <div className="social-media-wrapper">
      <div className="text-wrapper">
        Lets stay connected! Please feel free to follow me on my social media.
      </div>

      <div className="social-icons">
        <a href="https://m.facebook.com/tiara.pierce1" className="facebook">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>

        <a href="https://www.twitter.com/TiaraLeone_" className="twitter">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>

        <a href="https://www.instagram.com/tiara.leone/" className="instagram">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>

    </div>
  );
}
