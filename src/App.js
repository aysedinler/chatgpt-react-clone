// src/App.js
import './App.css';

import gptLogo from './Assets/chatgpt.svg';
import addBtn from './Assets/add-30.png';
import msgIcon from './Assets/message.svg';
import home from './Assets/home.svg';
import saved from './Assets/bookmark.svg';
import rocket from './Assets/rocket.svg';
import sendBtn from "./Assets/send.svg"
import userIcon from "./Assets/user-icon.png"
// import sendBtn from "./Assets/send.svg"
import gptImgLogo from "./Assets/chatgptLogo.svg"

function App() {
  return (
    <div className="App">

      <div className="sideBar">
        <div className="upperSide">

          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>


          <button className="midBtn">
            <img src={addBtn} alt="New Chat" className="addBtn" />
            New Chat
          </button>


          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What Is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to Use an API?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade Pro" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo iusto labore architecto maxime mollitia voluptates harum similique quaerat. Ab.</p>
          </div>
          <div className="chat">
            <img src={gptImgLogo} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo iusto labore architecto maxime mollitia voluptates harum similique quaerat. Ab.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='send a message' />
            <button className="send"><img src={sendBtn} alt="send" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
