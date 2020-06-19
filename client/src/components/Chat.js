import React from 'react'
import { Link } from 'react-router-dom';
import Profile from './chat/Profile';
import BurgerMenu from './chat/BurgerMenu';
import Search from './chat/Search';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Message from './chat/Message';

import '../stylesheets/chat.css';

const Chat = () => (
    <div className="chatWrapper">
        <Profile />
        <div className="left">
            <div className="header">
                <BurgerMenu />
                <Search />
            </div>
            <Dialogs />
        </div>
        <div className="right">
            <div className="status">
                <span className="name">Michel Lalala</span>
            </div>
            <div className="main">
                <Messages />
                <Message />
            </div>
        </div>
        {/* <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p> */}
    </div>
);

export default Chat;