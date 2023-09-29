import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <br></br>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/meniul-zilei">Meniul zilei</NavLink>
          <NavLink to="/itemi">Întreținere meniu</NavLink>
          <NavLink to="/comenzi">Comenzi</NavLink>
          <NavLink to="/penalizari">Penalizări</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login-admin">Deconectare</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
