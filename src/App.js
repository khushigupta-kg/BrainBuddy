import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png';
import mesgicon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import upgrade from './assets/rocket.svg';
import send from './assets/send.svg';
import user from './assets/user-icon.png';
import gptimglogo from './assets/chatgptLogo.svg';
import { sendMsgToAI } from "./openrouter";
import { useState ,useRef ,useEffect} from 'react';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text : "Hello! I am BrainBuddy, your AI assistant. How can I help you today?",
      isBot : true
    }
  ])
  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const msgEnd = useRef(null);

  const handleSend = async () => {
    const text = input
    setInput("");
    setMessages([...messages, {text: text, isBot: false}]);

    const res = await sendMsgToAI(text);
    setMessages([...messages, 
      {text: text, isBot: false}, 
      {text: res, isBot: true}
    ]);
  }
  const handleEnter = (e) =>{
    if(e.key === "Enter"){
      handleSend();
    }
  }
  
  const handlequery = async (e) => {
    const text = e.target.value;
    setMessages([...messages, {text: text, isBot: false}]);

    const res = await sendMsgToAI(text);
    setMessages([...messages, 
      {text: text, isBot: false}, 
      {text: res, isBot: true}
    ]);
  }

  return (
    <div className="App">
      
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersideTop">
            <img src={gptlogo} alt="logo" className="logo"/>
            <span className="appname">BrainBuddy</span>
          </div>

            <button className="midBtn" onClick={()=>{window.location.reload() }}><img src={addbtn} alt="newchat" className="addBtn"/>New Chat</button>
          
          <div className="uppersideBottom">
            <button className="query" onClick={handlequery} value={"What is Programming?"}><img src={mesgicon} alt="query" />What is Programming?</button>
            <button className="query" onClick={handlequery} value={"How to use an API?"}><img src={mesgicon} alt="query" />How to use an API?</button>
            <button className="query" onClick={handlequery} value={"What is Machine Learning?"}><img src={mesgicon} alt="query" />What is Machine Learning?</button>
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
          {messages.map((msg,i)=> 
          <div key={i} className={msg.isBot ? "chat bot" : "chat"}>
            <img className="chatimg" src={msg.isBot ? gptimglogo : user} alt={msg.isBot ? "gpt" : "user"}/>
            <p className="text">{msg.text}</p>
          </div>
          )}
          <div ref={msgEnd}/> 

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." value={input} onKeyDown={handleEnter}  onChange={(e)=>setInput(e.target.value)}/>
            <button className="sendBtn" onClick={handleSend} ><img src={send} alt="send"/></button>
          </div>
          <p>BrainBuddy is an AI assistant. How can I help you today?</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
