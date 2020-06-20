import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMessages } from '../../actions/chat';
import axios from 'axios';
import { set } from 'mongoose';

const getData = users => {
    return users.map(userId => (
        axios.get('/api/user/' + userId)
            .then(res => res.data)
    ));
}

const Dialog = ({ getAllMessages, users, roomId, userData }) => {
    const [logins, setLogins] = useState([]);

    useEffect(() => {
        getData(users).forEach(promise => {
            promise.then(user => {
                console.log(user.login, userData.login)
                setLogins([...logins, user.login]);
            })
        })
    }, []);

    return (
        <div className="dialog" onClick={e => getAllMessages(roomId)}>
            <div className="avatar" />
            <div className="infoDialog">
                <div className="topInfo">
                    <span className="name">user</span>
                    <span className="info">...</span>
                </div>
                <div className="bottomInfo">
                    <span className="info">...</span>
                    <div className="check"></div>
                </div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    getAllMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userData: state.login.userData
});

export default connect(mapStateToProps, { getAllMessages })(Dialog);