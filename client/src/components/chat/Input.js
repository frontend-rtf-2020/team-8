import React from 'react';

const Input = () => (
    <div className="message">
        <form className="messageForm">
            <input name="writeMessage" placeholder="White a message..." type="text" />
            <button type="submit"></button>
        </form>
    </div>
);

export default Input;