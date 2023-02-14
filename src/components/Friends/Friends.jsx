import React from "react";
import {
  addFriendsActionCreator,
  updateNewFriendsTextActionCreator,
} from "../../Redux/sidebar-reducer";
import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
  let friendsElements = props.state.friends.map((f) => (
    <FriendsItem
      friends={f.friend}
      dispatch={props.dispatch}
      newFriendsText={props.state.newFriendsText}
    />
  ));

  let newFriendsElement = React.createRef();

  let addFriends = () => {
    props.dispatch(addFriendsActionCreator());
  };

  let onFriendsChange = () => {
    let text = newFriendsElement.current.value;
    let action = updateNewFriendsTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={s.friendsItems}>{friendsElements}</div>
      <div>
        <div>
          <div>
            <textarea
              onChange={onFriendsChange}
              ref={newFriendsElement}
              value={props.newFriendsText}
            ></textarea>
          </div>
          <div>
            <button onClick={addFriends}>Add messages</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
