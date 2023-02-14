const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGES_TEXT = "UPDATE_NEW_MESSAGES_TEXT";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        messages: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGES_TEXT:
      state.newMessageText = action.newMess;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGES_TEXT, newMess: text };
};

export default messagesReducer;
