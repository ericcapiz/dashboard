import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.search}>
            <div classes={styles.icon}>
                <input placeholder="search" />
            </div>
            <input placeholder="Search" className={styles.input} type="search" />
            <div classes={styles.icon}>
                {/* <Icon classes={styles.arrow} width={14} /> */}
            </div>
        </div>
    )
}

export default SearchBar
