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
                    <div className="avatar">
                    </div>
                    <div className="infoDialog">
                        <div className="topInfo">
                            <span className="name">Daniil Popov</span>
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
                <div>name</div>
                <div>status</div>
            </div>
            <div className="">
                Низ
                </div>
        </div>
        {/* <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p> */}
    </div>
);

export default Chat;