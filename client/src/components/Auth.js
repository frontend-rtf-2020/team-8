import React, { Component } from 'react'
import '../stylesheets/auth.css'

export default class Auth extends Component {
    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Войдите в аккаунт</h1>
                    <h2>Пожалуйста, войдите в свой аккаунт </h2>
                    <form>
                        <input type="email" placeholder="Ваш email" required="required" autocomplete="off"></input>
                        <span className="left">Неверный адрес электронной почты</span>
                        <input type="password" placeholder="Ваш пароль" required="required" autocomplete="off"></input>
                        <span className="left">Неверный пароль</span>
                        <span className="right">Забыли пароль?</span>
                        <input type="submit" value="ВОЙТИ В АККАУНТ"></input>
                        <span className="center">Зарегистрироваться</span>
                    </form>
                    <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
                </div>
            </div>
        )
    }
}