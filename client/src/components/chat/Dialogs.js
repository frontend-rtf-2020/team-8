import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Dialog from './Dialog';

const Dialogs = ({ rooms, users, toSearchFor }) => {

    return (
        <div className="dialogs">
            {
                toSearchFor !== '' ?
                    users.map((user, index) => {
                        if (user.login.includes(toSearchFor))
                            return <Dialog key={index} user={user} />
                    })
                    :
                    rooms.map((room, index) =>
                        <Dialog
                            key={index}
                            roomId={room._id}
                            users={room.users}
                        />)
            }
        </div>
    );
}

const mapStateToProps = state => ({
    rooms: state.chat.rooms,
    users: state.chat.users,
    toSearchFor: state.chat.toSearchFor
});

export default connect(mapStateToProps)(Dialogs);