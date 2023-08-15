
import './ChatWindow.css';
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { useEffect, useRef, useState } from 'react';
import MessaItem from './MessaItem';

const ChatWindow = ({user}) => {

    const body = useRef()
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 1234, body: "fdfsdfsdfds"},
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 123, body: "fdfsdfsdfds"}, 
        {author: 1234, body: "fdfsdfsdfds"},
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight -  body.current.offsetHeight;
        }
    }, [list])

    const handleEmojiClick = (e) => {
        setText(text + e.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(!emojiOpen);
    }

    const handleMicClick = () => {
        if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript);
            }

            recognition.start();
        }
    }
    const handleSendClick = () => {
    }


    return (
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3607/3607444.png' alt='' className='chatWindow--avatar' />
                    <div className='chatWindow--name'>Antonio</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow--btn'>
                        <SearchIcon style={{ color: "#919191" }} />
                    </div>
                    <div className='chatWindow--btn'>
                        <AttachFileIcon style={{ color: "#919191" }} />
                    </div>
                    <div className='chatWindow--btn'>
                        <MoreVertIcon style={{ color: "#919191" }} />
                    </div>
                </div>
            </div>
            <div ref={body} className='chatWindow--body'>
                {list.map((item, key) => (
                    <MessaItem key={key} data={item} user={user} />
                ))}
            </div>

            <div className='chatWindow--emojiarea' style={{ height: emojiOpen ? '200px' : '0' }}>
                <EmojiPicker
                    onEmojiClick={(e) => handleEmojiClick(e)}
                    searchDisabled
                    skinTonesDisabled
                />
            </div>
            <div className='chatWindow--footer'>
                <div className='chatWindow--pre'>
                    <div className='chatWindow--btn' onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{ color: emojiOpen ? "#009688" : "#919191" }} />
                    </div>
                </div>
                <div className='chatWindow--inputarea'>
                    <input className='chatWindow--input' type='text' placeholder='Digite uma mensagem' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='chatWindow--pos'>
                    {text === '' ? <div onClick={handleMicClick} className='chatWindow--btn'>
                        <MicIcon style={{ color: listening ? "#126ece " : "#919191" }} />
                    </div> : <div onClick={handleSendClick} className='chatWindow--btn'>
                        <SendIcon style={{ color: "#919191" }} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ChatWindow;