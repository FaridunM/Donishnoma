import React from 'react';
import sf from './SearchField.module.css';

class SearchField extends React.Component {
    render() {
        function focus() {
            let search = document.querySelector(`.${sf.search}`);
            search.style.boxShadow = '0 0 2px 2px #269FF1';
        }

        function blur() {
            let search = document.querySelector(`.${sf.search}`);
            search.style.boxShadow = null;
        }

        return(
            <section className={sf.searchSection}>
                <section className={sf.search}>
                    <label htmlFor="search"></label>
                    <input type="search" id="search" onFocus={focus} onBlur={blur} placeholder="Поиск" />
                    <button></button>
                </section>
            </section>
        );
    }
}

export default SearchField;