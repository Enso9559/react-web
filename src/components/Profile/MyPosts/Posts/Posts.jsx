import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
      {props.message}
      <div>
        <button>like</button> {props.likesCount}
      </div>
    </div>
  );
};

export default Posts;
