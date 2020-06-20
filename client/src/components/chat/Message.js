import React from 'react';

const Message = ({ type, content }) => {
    return (
        <div className={type}>
            <div className="avatar" />
            <div className="inLetter">
                <span>{content}</span>
            </div>
            {/* <span className="info">Вчера, в 14:48</span> */}
        </div>
    );
}

export default Message;