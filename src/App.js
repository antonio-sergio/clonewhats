import './App.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

function App() {
  const [chatlist, setChatList] = useState([
    {
      chatId: 1, title: 'Fulano de tal', image: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'
    },
    {
      chatId: 2, title: 'Fulano de tal', image: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'
    },
    {
      chatId: 3, title: 'Fulano de tal', image: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'
    },
    {
      chatId: 4, title: 'Fulano de tal', image: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'
    },

  ]);
  const [activechat, setActiveChat] = useState({});
  const [user, setUSer] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUSer(newUser);
  }

  if(user === null){
    return <Login onReceive={handleLoginData}  />
  }
  return (
    <div className="app-window">
      <div className='sidebar'>
        <NewChat show={showNewChat} setShow={setShowNewChat} user={user} chatlist={chatlist} />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div onClick={handleNewChat}  className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{ color: "#919191" }} />
            <input type='search' placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className="chatList">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activechat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activechat.chatId !== undefined && <ChatWindow user={user} />}
        {
          activechat.chatId === undefined && <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;
