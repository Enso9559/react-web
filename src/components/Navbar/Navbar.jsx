import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Profile
          </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink
            to="/dialogs"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Message
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/setting"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Settings
          </NavLink>
        </div>
        <div className={s.friends}>
          <NavLink
            to="/friends"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Friends
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
