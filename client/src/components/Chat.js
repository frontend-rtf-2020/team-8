import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Profile from './chat/Profile';
import BurgerMenu from './chat/BurgerMenu';
import Search from './chat/Search';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Message from './chat/Message';

import '../stylesheets/chat.css';

const Chat = ({ isAuthenticated }) => {
    
    if (!isAuthenticated)
        return <Redirect to='/' />

    return (
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
}

Chat.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

export default connect(mapStateToProps)(Chat);