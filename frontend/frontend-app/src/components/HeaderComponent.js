import React from "react";
import Navbar from "./Navbar/Navbar";
import Logo from "../images/Sigla-USV-scroll.png";
const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar navrbar-expand-md navbar-dark bg-dark"
          style={{ width: "100%" }}
        >
          <div>
            <a href="https://javaguides.net" className="navbar-brand">
              <img
                src={Logo}
                alt="Logo Restaurant USV"
                className="logo-image"
                style={{
                  width: "10%",
                  height: "10%",
                  marginRight: "10px",
                  marginLeft: "25px",
                }}
              />
              <span>Restaurant USV</span>
            </a>
          </div>
          <Navbar></Navbar>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
