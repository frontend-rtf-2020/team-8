import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import Message from './Message';

const Messages = ({ messages, userData: {_id} }) => {
    const [data, setData] = useState('');

    /* 
    useEffect(() => {
        const socket = socketIOClient('http://localhost:5000');
        socket.on('connection', data => {
            setData(data);
        }, []);
    })*/

    return (
        <div className="messages">
            {
                messages.map((message, index) => 
                    <Message
                        key={index}
                        type={message.sender === _id ? "outcomingLetterWrapper" : "incomingLetterWrapper"}
                        content={message.content} 
                    />
                    )
            }
        </div>
    );
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    messages: state.chat.messages,
    userData: state.login.userData
});

export default connect(mapStateToProps)(Messages);