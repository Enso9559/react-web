import React from "react";
import s from "./FriendsItem.module.css";
import { NavLink } from "react-router-dom";

const FriendsItem = (props) => {
  let path = "/friends/" + props.id;
  return (
    <div className={s.friendsItem}>
      <div className={s.avatarFriend}>
        <img src="https://cdn0.iconfinder.com/data/icons/faces-set-05/64/sideburns-black-male-512.png"></img>
        <NavLink to={path}>{props.friends}</NavLink>
      </div>
    </div>
  );
};

export default FriendsItem;
