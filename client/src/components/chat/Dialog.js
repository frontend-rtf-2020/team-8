import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMessages } from '../../actions/chat';

const Dialog = ({ getAllMessages, users, roomId }) => {

    return (
        <div className="dialog" onClick={e => getAllMessages(roomId)}>
            <div className="avatar" />
            <div className="infoDialog">
                <span className="name">{users.map(user => user.login)}</span>
                <div className="check"></div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    getAllMessages: PropTypes.func.isRequired
};

export default connect(null, { getAllMessages })(Dialog);