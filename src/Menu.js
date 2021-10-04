import React from "react";

const Menu = () => {
  return (
    <nav className="navPhone">
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <hr />
        <li>Login</li>
        <li className="signUp">Sign Up</li>
      </ul>
    </nav>
  );
};

export default Menu;
