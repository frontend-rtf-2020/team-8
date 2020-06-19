import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/chat.css'

const Chat = () => (
    <div className="chatWrapper">
        <div className="left">
            <div className="header">
                <div className="menu">
                    menu
                </div>
                <div className="searchDiv">
                    <form action="" method="get">
                        <input name="search" placeholder="Search..." type="search"/>
                    </form>
                </div>
            </div>
            <div className="dialogs">
                <div className="dialog">
                    <div className="avatar"/>
                    <div className="infoDialog">
                        <div className="topInfo">
                            <span className="name">Anton Pipenko</span>
                            <span className="info">today</span>
                        </div>
                        <div className="bottomInfo">
                            <span className="info">Все нормально)</span>
                            <div className="check"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="status">
                <span className="name">Michel Lalala</span>
            </div>
            <div className="main">
                <div className="messages">
                    <div className="incomingLetterWrapper">
                        <div className="avatar"/>
                        <div className="inLetter">
                            <span>Apple - это лучшее что придумал человек!</span>
                        </div>
                        {/* <span className="info">Вчера, в 14:48</span> */}
                    </div>
                    <div className="outcomingLetterWrapper">
                        <div className="inLetter">
                            <span>На самом то деле, Сяоми топ за свои деньги!</span>
                        </div>
                        <div className="avatar"/>
                    </div>
                </div>
                <div className="message">
                    <div className="messageForm">
                        <form action="" method="get">
                            <input name="writeMessage" placeholder="White a message..." type="text"/>
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p> */}
    </div>
);

export default Chat;