import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllRooms } from '../../actions/chat';

import Dialog from './Dialog';

const Dialogs = ({ getAllRooms, rooms }) => {

    useEffect(() => {
        getAllRooms();
    }, []);

    return (
        <div className="dialogs">
            {
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

Dialogs.propTypes = {
    getAllRooms: PropTypes.func.isRequired,
    rooms: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    rooms: state.chat.rooms
});

export default connect(mapStateToProps, { getAllRooms })(Dialogs);