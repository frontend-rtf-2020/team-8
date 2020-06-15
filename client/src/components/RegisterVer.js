import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProtTypes from 'prop-types';
import { repeatSending } from '../actions/register';
import '../stylesheets/registerVer.css';

const RegisterVer = ({ repeatSending, email }) => {
    const [ userEmail, setEmail ] = useState('');

    const onChange = e => setEmail(e.target.value);

    const onSubmit = e => {
        e.preventDefault();

        if (email !== '') {
            repeatSending(email);
        } else if (userEmail !== '') {
            repeatSending(userEmail);
        }
    }

    return (
        <div className="RegVer">
            <div>
                <h1>Регистрация</h1>
                <h2>Подтверждение аккаунта</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <img src="/mailVer.png" alt="Письмо отправлено на почту"></img>
                    {email ?
                        <div>
                            <span className="center">Подтвердите свой аккаунт</span>
                            <span className="center">На вашу почту {email} отправлено письмо со ссылкой на подтверждение аккаунта.</span>
                            <button type="submit">Отправить снова</button>
                        </div>
                        :
                        <div>
                            <span className="center">На указанную почту будет оптравлено письмо со ссылкой на подтверждение аккаунта</span>
                            <input
                                name="email"
                                type="email"
                                placeholder="Введите Ваш email"
                                value={userEmail}
                                onChange={e => onChange(e)}
                                required
                            />
                            <button type="submit">Отправить снова</button>
                        </div>
                    }

                </form>
                <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
            </div>
        </div>);
};

RegisterVer.propTypes = {
    repeatSending: ProtTypes.func.isRequired,
    email: ProtTypes.string.isRequired
};

const mapStateToProps = state => ({
    email: state.register.email
});

export default connect(mapStateToProps, { repeatSending })(RegisterVer);