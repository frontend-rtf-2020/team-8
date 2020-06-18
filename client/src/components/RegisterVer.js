import React from 'react'
import '../stylesheets/registerVer.css'
import mailImage from '../img/mail.svg'

const RegisterVer = () => (
    <div className="RegVer">
        <div>
            <h1>Регистрация</h1>
            <h2>Подтверждение аккаунта</h2>
            <form>
                <img className="mailImage" src={mailImage} alt="Письмо отправлено на почту"/>
                <span className="center">Подтвердите свой аккаунт</span>
                <span className="center">На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</span>
                <button type="submit">Повторить отправку</button>
            </form>
            <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
        </div>
    </div>
);

export default RegisterVer;