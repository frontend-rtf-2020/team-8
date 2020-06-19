import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getData = users => {
    return users.map(userId => (
        axios.get('/api/user/' + userId)
            .then(res => res.data)
    ));
}

const Dialog = ({ users, myId }) => {
    const [login, setLogin] = useState('');

    useEffect(() => {
        getData(users).forEach(promise => {
            promise.then(user => {
                if (user._id !== myId) {
                    setLogin(user.login);
                }
            });
        });;
    }, [])

    return (
        <div className="dialog">
            <div className="avatar" />
            <div className="infoDialog">
                <div className="topInfo">
                    <span className="name">{login}</span>
                    <span className="info">...</span>
                </div>
                <div className="bottomInfo">
                    <span className="info">...</span>
                    <div className="check"></div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;