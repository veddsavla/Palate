import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState("home");

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          magnam qui quae libero, recusandae labore veniam totam neque, saepe
          vel fugiat? Voluptates assumenda ad enim eaque quae quibusdam quod
          mollitia.
        </p>
        <button
          onClick={() => {
            setMenu("menu");
            handleScroll("explore-menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
