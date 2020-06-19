import React from 'react'
import '../stylesheets/registerSecondVer.css'
import mailImageApprove from '../img/mailapprove.svg'

const RegisterVer = () => (
    <div className="RegSecondVer">
        <div>
            <h1>Регистрация</h1>
            <h2>Подтверждение аккаунта</h2>
            <form>
                <img className="mailImageApprove" src={mailImageApprove} alt="Письмо отправлено на почту"/>
                <span className="center">Аккаунт успешно подтверждён</span>
                <span className="center">Войдите в свой аккаунт</span>
                <button type="submit">Войти в аккаунт</button>
            </form>
            <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
        </div>
    </div>
);

export default RegisterVer;