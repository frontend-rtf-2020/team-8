import React, { useState } from 'react'

const Register = () => {
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
            console.log("password do not match");
        } else {
            console.log(data);
        }
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input
                name="login"
                placeholder="Your login" 
                value={login} 
                onChange={e => onChange(e)} 
                required
            />
            <input
                name="email"
                type="email"
                placeholder="Your email" 
                value={email} 
                onChange={e => onChange(e)} 
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Your password" 
                value={password} 
                onChange={e => onChange(e)} 
                required
            />
            <input
                name="passwordConfirmation"
                type="password"
                placeholder="Your password again" 
                value={passwordConfirmation} 
                onChange={e => onChange(e)} 
                required
            />
            <button type="submit">Регистрация</button>
        </form>
    );
};

export default Register;