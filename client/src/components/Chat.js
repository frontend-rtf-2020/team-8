import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/chat.css'

const Chat = () => (
    <div className="chatWrapper">
        <div id="profile" class="profile">
            <div class="profileWrapper">
                <div class="profileInner">
                    <div class="profileHeader">
                        <h3 class="profileTitle">Мой профиль</h3>
                        <a href="#close" title="Закрыть" class="close">×</a>
                     </div>
                    <div class="profileText">
                        <h3 class="profileTitle">user.name</h3>        
                        <p>Name</p>
                        <h3 class="profileTitle">user.surname</h3>        
                        <p>Surame</p>
                        <h3 class="profileTitle">user.username</h3>        
                        <p>Userame</p>
                        <h3 class="profileTitle">user.status</h3>        
                        <p>Status</p>
                    </div>
                </div>    
            </div>
        </div>	
        <div className="left">
            <div className="header">
                    <div class="menu">   
                    <div className="menuButton">
                        <div className="lines"></div>
                        <div className="lines"></div>
                        <div className="lines"></div>
                    </div>
                    <div class="dropdown-content">
                        <a href="#profile">Мой профиль</a>
                        <a href="#">Выход</a>
                    </div>
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