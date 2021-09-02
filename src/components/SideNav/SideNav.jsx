import React from 'react';
import SideNaveLinks from '../SideNavLinks/SideNaveLinks';
import Icon from './../Icons/Icon';
import styles from './SideNav.module.css';

const SideNav = () => {
    return (
        <aside className={styles.sideNav}>
            <div className={styles.image} />
            <SideNaveLinks />
            <Icon classes={styles.arrow} />
        </aside>
    )
}

export default SideNav
