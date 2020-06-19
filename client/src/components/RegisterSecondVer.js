import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { verifyAccount } from '../actions/register';
import ProtTypes from 'prop-types';

import '../stylesheets/registerSecondVer.css';
import mailImageApprove from '../img/mailapprove.svg';

const RegisterVer = ({ verifyAccount, isVerified, errors }) => {
    const { token } = useParams();

    useEffect(() => {
        verifyAccount(token);
    }, []);

    return (
        <div className="RegSecondVer">
            <div>
                <h1>Регистрация</h1>
                <h2>Подтверждение аккаунта</h2>
                <form>
                    <img className="mailImageApprove" src={mailImageApprove} alt="Письмо отправлено на почту" />
                    {
                        (!isVerified && errors.length === 0) ?
                            <Fragment>
                                <span className="center">Идёт попытка подтверждения аккаунта...</span>
                                <Link to="/login">
                                    <button>Отмена</button>
                                </Link>
                            </Fragment>
                            : (errors.length !== 0) ?
                                <Fragment>
                                    <span className="center">К сожалению, возникли ошибки...</span>
                                    {console.log(errors)}
                                    {errors.map((error, index) => <span className="center" key={index}>{error.msg}</span>)}
                                    <Link to="/login">
                                        <button>Вернуться к авторизации</button>
                                    </Link>
                                </Fragment>
                                :
                                <Fragment>
                                    <span className="center">Аккаунт успешно подтверждён</span>
                                    <span className="center">Войдите в свой аккаунт</span>
                                    <Link to="/login">
                                        <button>Войти в аккаунт</button>
                                    </Link>
                                </Fragment>
                    }
                </form>
                <p>Copyright © 2020  Dream team Group RI-370005. All rights reserved.</p>
            </div>
        </div>
    );
}

RegisterVer.propTypes = {
    verifyAccount: ProtTypes.func.isRequired,
    isVerified: ProtTypes.bool.isRequired,
    errors: ProtTypes.array.isRequired
}

const mapStateToProps = state => ({
    isVerified: state.register.isVerified,
    errors: state.register.errors
});

export default connect(mapStateToProps, { verifyAccount })(RegisterVer);