import React, { useState, useEffect } from 'react';
import "./Nav.css";

const Nav = () => {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://fontmeme.com/permalink/201022/860c737623e2a5c586883597a1be5f65.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://raw.githubusercontent.com/andasan/beenhere-prv/master/uploads/images/79e7b2fb-bce3-4b4b-a462-f044def0592e.jpeg?token=AAYXZN6CTM57DD36T6XX54S7TM77A"
        alt="Netflix Avatar"
      />
    </div>
  )
}

export default Nav
