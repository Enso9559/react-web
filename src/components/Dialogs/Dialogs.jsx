import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/messages-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message
      message={m.messages}
      dispatch={props.dispatch}
      newMessageText={props.state.newMessageText}
    />
  ));

  let newMessagesElement = React.createRef();

  let addMessages = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessagesElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <div>
              <textarea
                onChange={onMessageChange}
                ref={newMessagesElement}
                value={props.newMessageText}
              ></textarea>
            </div>
            <div>
              <button onClick={addMessages}>Add messages</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
