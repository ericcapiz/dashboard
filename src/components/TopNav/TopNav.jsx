import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './TopNav.module.css';



const TopNav = () => {
    return (
        <nav className={`${styles.topNav} d-flex justify-content-between align-items-center px-3`}>
            <h5 className={styles.brand}>Sales Dashboard</h5>
            <SearchBar />
        </nav>
    )
}

export default TopNav
