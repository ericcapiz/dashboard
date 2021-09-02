import React, {Fragment} from 'react'
import Icon from '../Icons/Icon';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <Fragment>
            <header className="d-flex align-items-center">
                <Icon icon='dashboard' width={20} />
                <h5 className="mb-0 ml-2">Sales Dashboard</h5>
            </header>
            <div className={styles.grid}>

            </div>
        </Fragment>
    )
}

export default Dashboard
