import React from 'react';

const BurgerMenu = () => (
    <div className="menu">
        <div className="menuButton">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
        </div>
        <div className="dropdown-content">
            <a href="#profile">Мой профиль</a>
            <a href="#">Выход</a>
        </div>
    </div>
);

export default BurgerMenu;