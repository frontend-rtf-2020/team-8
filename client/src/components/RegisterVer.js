import React from 'react';
import '../stylesheets/registerVer.css';

const RegisterVer = () => (
    <div className="RegVer">
        <div>
            <h1>Регистрация</h1>
            <h2>Подтверждение аккаунта</h2>
            <form>
                <img src="/mailVer.png" alt="Письмо отправлено на почту"></img>
                <span className="center">Подтвердите свой аккаунт</span>
                <span className="center">На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</span>
            </form>
            <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
        </div>
    </div>
);

export default RegisterVer;