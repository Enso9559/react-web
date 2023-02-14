import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div className={s.dialog + " " + s.active}>
      <img className={s.profileAva} src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png"></img>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
