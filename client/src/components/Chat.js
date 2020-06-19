import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/chat.css'

const Chat = () => (
    <div className="wrapper">
        <div className="left">
            <div className="header">
                <div className="menu">
                    Бургер меню
                </div>
                <div className="search">
                    <span>Строка поиска</span>
                </div>
            </div>
            <div className="right">
                <div className="user">
                    тут ФИО
                </div>
                <div className="dialogs">
                    <span>Здесь все дилоги</span>
                </div>
            </div>
        </div>
        <div className="chat">
            <span>Тут будет чат</span>
        </div>
        <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
    </div>
);

export default Chat;