import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtTypes from 'prop-types';
import { login } from '../actions/login';

import '../stylesheets/auth.css';

const Auth = ({ login, isAuthenticated, isWrongData, needVerification }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = data;

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

    const onSumbit = e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect
    if (needVerification) {
        return <Redirect to="/thanks"/>
    }

    if (isAuthenticated) {
        return <Redirect to="/chat"/>
    }

    return (
        <div className="Auth">
            <div>
                <h1>Войдите в аккаунт</h1>
                <h2>Пожалуйста, войдите в свой аккаунт </h2>
                <form onSubmit={e => onSumbit(e)}>
                    <input
                        name='email'
                        type="email"
                        placeholder="Ваш email"
                        autoComplete="off"
                        value={email}
                        onChange={e => onChange(e)}
                        required />
                    <input
                        name="password"
                        type="password"
                        placeholder="Ваш пароль"
                        autoComplete="off"
                        value={password}
                        onChange={e => onChange(e)}
                        required />
                    { isWrongData && <span className="left">Введены неверные данные</span> }
                    <input type="submit" value="ВОЙТИ В АККАУНТ"></input>
                    <Link to="/register">
                        <span className="center">Зарегистрироваться</span>
                    </Link>
                </form>
                <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
            </div>
        </div>
    );
}

Auth.propTypes = {
    login: ProtTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
    isWrongData: state.login.isWrongData,
    needVerification: state.login.needVerification
});

export default connect(mapStateToProps, { login })(Auth);