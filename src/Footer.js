import React from "react";

import facebook from "../src/images/icon-facebook.svg";
import twitter from "../src/images/icon-twitter.svg";
import pinterest from "../src/images/icon-pinterest.svg";
import instagram from "../src/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <p>Shortly</p>

      <div>
        <p>Features</p>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>

      <div>
        <p>Resources</p>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>

      <div>
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <img src={facebook} alt="" className="icons" />
        <img src={twitter} alt="" className="icons" />
        <img src={pinterest} alt="" className="icons" />
        <img src={instagram} alt="" className="icons" />
      </div>
    </footer>
  );
};

export default Footer;
