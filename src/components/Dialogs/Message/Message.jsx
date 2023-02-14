import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.dialog}>
        <img src="https://www.pngall.com/wp-content/uploads/10/Message-Download-Free-PNG.png"></img>
        {props.message}
      </div>
    </div>
  );
};

export default Message;
