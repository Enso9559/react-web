import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  state={props.state.messagesPage}
                  dispatch={props.dispatch}
                />
              }
            />
            {/* <Route path="/dialogs/*" element={Dialogs} /> */}
            <Route path="/news" element={<News newsData={props.newsData} />} />
            <Route
              path="/music"
              element={<Music musicData={props.musicData} />}
            />
            <Route
              path="/setting"
              element={<Setting settingData={props.settingData} />}
            />
            <Route
              path="/friends"
              element={
                <Friends
                  state={props.state.sidebar}
                  dispatch={props.dispatch}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
