import React from 'react';
import PropTypes from 'prop-types';
import Icon from './../Icons/Icon';
import styles from './SingleProductInsight.module.css';

const SingleProductInsight = ({amount, icon}) => {
    return (
        <h4 className={styles.amount}>
            <Icon classes="mr-4" icon={icon}/>
            {amount}
        </h4>
    )
}

export default SingleProductInsight
