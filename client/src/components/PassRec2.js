import React from 'react'
import '../stylesheets/passrec2.css'
import mailImageApprove from '../img/mailapprove.svg'

const PassRec2 = () => (
    <div className="PassRec2">
        <div>
            <h1>Пароль восстановлен!</h1>
            <form>
            <img className="mailImageApprove" src={mailImageApprove} alt="Письмо отправлено на почту"/>
                <span className="center">Проверьте свою почту</span>
                <span className="center">На вашу почту отправлено письмо с ссылкой на восстановление пароля.</span>
            </form>
            <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
        </div>
    </div>
);

export default PassRec2;