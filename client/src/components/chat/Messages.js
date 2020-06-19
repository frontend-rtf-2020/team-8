import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const Messages = () => {
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
            <div className="incomingLetterWrapper">
                <div className="avatar" />
                <div className="inLetter">
                    <span>Apple - это лучшее что придумал человек!</span>
                </div>
                {/* <span className="info">Вчера, в 14:48</span> */}
            </div>
            <div className="outcomingLetterWrapper">
                <div className="inLetter">
                    <span>На самом то деле, Сяоми топ за свои деньги!</span>
                </div>
                <div className="avatar" />
            </div>
        </div>
    );
}

export default Messages;