import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setToSearchFor, clearSearch } from '../../actions/chat';


const Search = ({ setToSearchFor, clearSearch, toSearchFor }) => {
    const [login, setLogin] = useState('');

    const onSubmit = e => {
        setToSearchFor(login);
    }

    return (
        <div className="searchDiv">
            <input
                name="search"
                placeholder="Поиск..."
                value={login}
                onChange={e => setLogin(e.target.value)}
                type="search"
            />
            {
                toSearchFor !== '' &&
                <div>
                    <button onClick={e => clearSearch()}>X</button>
                </div>
            }
            <input
                type="submit"
                value="..."
                onClick={e => onSubmit(e)}
            />
        </div>
    );
}

Search.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    setToSearchFor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    toSearchFor: state.chat.toSearchFor
});

export default connect(mapStateToProps, { clearSearch, setToSearchFor })(Search);