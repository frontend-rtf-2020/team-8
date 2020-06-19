import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/login';

const BurgerMenu = ({ logout }) => {
    return (
        <div className="menu">
            <div className="menuButton">
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
            <div className="dropdown-content">
                <a href="#profile">Мой профиль</a>
                <a onClick={logout}>Выход</a>
            </div>
        </div>
    );
}

BurgerMenu.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(BurgerMenu);