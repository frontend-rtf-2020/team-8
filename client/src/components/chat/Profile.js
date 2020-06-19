import React from 'react';
import { connect } from 'react-redux';
import ProtTypes from 'prop-types';
import { takeDateFrom } from '../../utils/dataCorrector';

const Profile = ({userData}) => (
    <div id="profile" className="profile">
        <div className="profileWrapper">
            <div className="profileInner">
                <div className="profileHeader">
                    <h3 className="profileTitle">Мой профиль</h3>
                    <a href="#close" title="Закрыть" className="close">×</a>
                </div>
                <div className="profileText">
                    <h3 className="profileTitle">{userData.login}</h3>
                    <p>Login</p>
                    <h3 className="profileTitle">{userData.email}</h3>
                    <p>e-mail</p>
                    <h3 className="profileTitle">{takeDateFrom(userData.date)}</h3>
                    <p>Дата регистрации</p>
                </div>
            </div>
        </div>
    </div>
);

Profile.propTypes = {
    userData: ProtTypes.object.isRequired
};

const mapStateToProps = state => ({
    userData: state.login.userData
});

export default connect(mapStateToProps)(Profile);