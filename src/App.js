import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png';
import mesgicon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import upgrade from './assets/rocket.svg';
import send from './assets/send.svg';

function App() {
  return (
    <div className="App">
      
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersideTop">
            <img src={gptlogo} alt="logo" className="logo"/>
            <span className="appname">BrainBuddy</span>
          </div>

            <button className="midBtn"><img src={addbtn} alt="newchat" className="addBtn"/>New Chat</button>
          
          <div className="uppersideBottom">
            <button className="query"><img src={mesgicon} alt="query" />What is Programming?</button>
            <button className="query"><img src={mesgicon} alt="query" />How to use an API?</button>
            <button className="query"><img src={mesgicon} alt="query" />What is Machine Learning?</button>
          </div>
        </div>
        <div className="lowerside">
          <div className="list"><img src={home} alt="home" className='listimg'/>Home</div>
          <div className="list"><img src={saved} alt="saved" className='listimg'/>Saved</div>
          <div className="list"><img src={upgrade} alt="upgrade" className='listimg'/>Upgrade to Pro</div>
        </div>
      </div>



      <div className="main">
        <div className="chats">
          
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />
            <button className="sendBtn"><img src={send} alt="send" /></button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
