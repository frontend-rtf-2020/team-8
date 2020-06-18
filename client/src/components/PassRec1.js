import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/passrec1.css'

const PassRec1 = () => (
    <div className="PassRec1">
        <div>
            <h1>Забыли пароль?</h1>
            <h2>Пожалуйста, введите почту, на которую зарегистрирован аккаунт</h2>
            <form>
                <input type="email" placeholder="Ваш email" autoComplete="off" required/>
                <span className="left">Неверный адрес электронной почты</span>
                <Link to="/passrec2">
                <input type="submit" value="ВОССТАНОВИТЬ ПАРОЛЬ"></input>
                </Link>
                <Link to="/register">
                    <span className="center">Зарегистрироваться</span>
                </Link>
                <Link to="/users">
                    <span className="center">Пользователи</span>
                </Link>
            </form>
            <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
        </div>
    </div>
);

export default PassRec1;