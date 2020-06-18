import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/auth.css'

const Auth = () => (
    <div className="Auth">
        <div>
            <h1>Войдите в аккаунт</h1>
            <h2>Пожалуйста, войдите в свой аккаунт </h2>
            <form>
                <input type="email" placeholder="Ваш email" autoComplete="off" required/>
                <span className="left">Неверный адрес электронной почты</span>
                <input type="password" placeholder="Ваш пароль" autoComplete="off" required/>
                <span className="left">Неверный пароль</span>
                <Link to="/passrec1">
                    <span className="right">Забыли пароль?</span>
                </Link>
                <input type="submit" value="ВОЙТИ В АККАУНТ"></input>
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

export default Auth;