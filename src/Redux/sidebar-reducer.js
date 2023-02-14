const ADD_FRIENDS = "ADD_FRIENDS";
const UPDATE_NEW_FRIENDS_TEXT = "UPDATE_NEW_FRIENDS_TEXT";

let initialState = {
  friends: [
    { id: 1, friend: "Sis Admin Paavveell" },
    { id: 2, friend: "Danya" },
    { id: 3, friend: "Sanechka" },
    { id: 4, friend: "Nikita" },
  ],
  newFriendsText: "new friends",
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      let newFriends = {
        id: 5,
        friend: state.newFriendsText,
      };
      state.friends.push(newFriends);
      state.newFriendsText = "";
      return state;
    case UPDATE_NEW_FRIENDS_TEXT:
      state.newFriendsText = action.newFriend;
      return state;
    default:
      return state;
  }
};

export const addFriendsActionCreator = () => {
  return {
    type: ADD_FRIENDS,
  };
};

export const updateNewFriendsTextActionCreator = (text) => {
  return { type: UPDATE_NEW_FRIENDS_TEXT, newFriend: text };
};

export default sidebarReducer;
