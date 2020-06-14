import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/register';
import { Link, Redirect } from 'react-router-dom';
import ProtTypes from 'prop-types';
import '../stylesheets/register.css'

const Register = ({ setAlert, register, isRegistered }) => {
    const [data, setData] = useState({
        login: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const { login, email, password, passwordConfirmation } = data;

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setAlert("Введённые пароли не совпадают", "danger", 3000);
        } else {
            register({ login, email, password });
        }
    };

    // Redirect
    if (isRegistered)
        return <Redirect to="/thanks" />

    return (
        <div className="Reg">
            <div>
                <h1>Регистрация</h1>
                <h2>Пожалуйста, зарегистрируйте свой аккаунт </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <input
                        name="login"
                        placeholder="Придумайте никнейм" 
                        value={login} 
                        onChange={e => onChange(e)} 
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Введите Ваш email" 
                        value={email} 
                        onChange={e => onChange(e)} 
                        required
                    />
                <input
                    name="password"
                    type="password"
                    placeholder="Придумайте пароль" 
                    value={password} 
                    onChange={e => onChange(e)} 
                    required
                />
                <input
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Повторите пароль" 
                    value={passwordConfirmation} 
                    onChange={e => onChange(e)} 
                    required
                />
                <button type="submit">Регистрация</button>
                <Link to="/">
                    <span className="center">Есть аккаунт? Выполните вход</span>
                </Link>
                </form>
            </div>
            <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
        </div>
        
    );
};

Register.propTypes = {
    setAlert: ProtTypes.func.isRequired,
    register: ProtTypes.func.isRequired,
    isRegistered: ProtTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isRegistered: state.register.isRegistered
});

export default connect(mapStateToProps, { setAlert, register })(Register);