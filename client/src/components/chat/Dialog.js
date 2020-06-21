import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMessages, createChat, clearSearch, getAllRooms } from '../../actions/chat';

const Dialog = ({ createChat, clearSearch, getAllMessages, getAllRooms, user, users, roomId, userData }) => {

    const onClick = e => {
        if (user) {
            createChat(userData._id, user._id).then(res => getAllRooms());
            console.log('here')
            clearSearch();
        }
        else
            getAllMessages(roomId);
    }

    return (
        <div className="dialog" onClick={e => onClick(e)}>
            <div className="avatar" />
            <div className="infoDialog">
                {
                    user ?
                        <Fragment>
                            <span className="name">{user.login}</span>
                            <span>Написать пользователю...</span>
                        </Fragment>
                        :
                        <Fragment>
                            <span className="name">{users.map(user => user.login)}</span>
                            <div className="check"></div>
                        </Fragment>
                }
            </div>
        </div>
    );
};

Dialog.propTypes = {
    createChat: PropTypes.func.isRequired,
    getAllMessages: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userData: state.login.userData
});

export default connect(mapStateToProps, { createChat, getAllMessages, clearSearch, getAllRooms })(Dialog);