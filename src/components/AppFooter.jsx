import React from "react";

import github_logo from "../assets/github.svg"
import instagram_logo from "../assets/instagram.svg"
import linkedin_logo from "../assets/linkedin.svg"

export default function AppFooter() {
  return (
    <>
      <footer>
        <p>Send me a DM whenever!</p>
        <ul className="app_footer__social_media_list">
          <li>
            <a href="">
              <img className="github_logo" src={github_logo} alt="GitHub Logo" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagram_logo} alt="Instagram Logo" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={linkedin_logo} alt="LinkedIn Logo" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
