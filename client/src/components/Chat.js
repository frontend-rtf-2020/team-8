import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

import Profile from './chat/Profile';
import BurgerMenu from './chat/BurgerMenu';
import Search from './chat/Search';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Input from './chat/Input';

import '../stylesheets/chat.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const Chat = ({ isAuthenticated, userData }) => {

    if (!isAuthenticated)
        return <Redirect to='/' />

    return (
        <div className="chatWrapper">
            <Profile userData={userData}/>
            <div className="left">
                <div className="header">
                    <BurgerMenu />
                    <Search />
                </div>
                <Dialogs/>
            </div>
            <div className="right">
                <div className="status">
                    <span className="name">{userData.login}</span>
                </div>
                <div className="main">
                    <Messages />
                    <Input />
                </div>
            </div>
            {/* <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p> */}
        </div>
    );
}

Chat.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
    userData: state.login.userData
});

export default connect(mapStateToProps)(Chat);