import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Как твои дела?", likesCount: 12 },
        { id: 2, post: "Это мой первый пост", likesCount: 7 },
      ],
      newPostText: "new post",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Pavel" },
        { id: 2, name: "Anastasia" },
        { id: 3, name: "Nikita" },
        { id: 4, name: "Emma" },
        { id: 5, name: "Marina" },
        { id: 6, name: "Danya" },
        { id: 7, name: "Liana" },
      ],
      messages: [
        { id: 1, messages: "Привет" },
        { id: 2, messages: "Привет, как дела?" },
        { id: 3, messages: "Все нормально, у тебя как?" },
        { id: 4, messages: "Отлично!" },
      ],
      newMessageText: "new messages",
    },
    sidebar: {
      friends: [
        { id: 1, friend: "Sis Admin Paavveell" },
        { id: 2, friend: "Danya" },
        { id: 3, friend: "Sanechka" },
        { id: 4, friend: "Nikita" },
      ],
      newFriendsText: "new friends",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
