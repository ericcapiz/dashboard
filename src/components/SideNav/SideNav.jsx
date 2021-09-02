import React from 'react';
import Icon from './../Icons/Icon';
import styles from './SideNav.module.css';
// import ArrowIcon from './../Icons/ArrowIcon';

const SideNav = () => {
    return (
        <aside className={styles.sideNav}>
            <div className={styles.image}></div>
            <div className={styles.panel}>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.image}></div>
            </div>
            <Icon classes={styles.arrow} />
           
        </aside>
    )
}

export default SideNav
