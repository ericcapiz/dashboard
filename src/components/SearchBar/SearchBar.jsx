import React from 'react';
import styles from './SearchBar.module.css';
import Icon from './../Icons/Icon';

const SearchBar = () => {
    return (
        <div className={styles.search}>
            <div classes={styles.icon}>
                <Icon icon="search" width={14} />
            </div>
            <input placeholder="Search" className={styles.input} type="search" />
            <div classes={styles.icon}>
                <Icon classes={styles.arrow} width={14} />
            </div>
        </div>
    )
}

export default SearchBar
