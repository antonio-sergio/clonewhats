import { useState } from "react";
import "./NewChat.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const NewChat = ({ show, setShow, user, chatlist}) => {
    const [list, setList] = useState([
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png', name: 'Antonio' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png', name: 'Antonio' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png', name: 'Antonio' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png', name: 'Antonio' },
    ])

    const handleClose = () => {
        setShow(false);
    }
    return (
        <div className="newChat" style={{ left: show ? 0 : -415 }}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{ color: "#fff" }} />
                </div>
                <div className="newChat--headtitle">
                    Nova Conversa
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat-itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default NewChat;