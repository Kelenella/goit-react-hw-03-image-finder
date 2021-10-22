import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        search: '',
    }

    render() {
        return (<header className="Searchbar">
            <form className={s.searchForm}>
                <button type="submit" className={s.searchFormButton}>
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>);
    }
}
   

export default Searchbar;