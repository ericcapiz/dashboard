import React, {Fragment} from 'react'
import Card from './../Card';
import Icon from './../Icons/Icon';
import SingleProduct from '../SingleProduct';
// import Ranking from '../Ranking';
// import Stats from '../Stats';
import airPodsImg from '../../assets/airpods.jpg';
import appleImacImg from '../../assets/imac.jpg';
// import mostProfitableGoods from '../../data/ProfitableSections.json';
// import mostProfitableCategories from '../../data/profitableCategories.json';
// import topSellingProducts from '../../data/topSellingProducts.json';
// import topViewedProducts from '../../data/topViewedProducts.json';

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <Fragment>
            <header className="d-flex align-items-center">
                <Icon icon='dashboard' width={20} />
                <h5 className="mb-0 ml-2">Sales Dashboard</h5>
            </header>
            <div className={styles.grid}>
                <div className={styles.section}>
                        
                    <Card headline="Best Selling Product">
                        <SingleProduct 
                            imgSrc={airPodsImg} 
                            imgAlt="Airpods Pro" 
                            amount="8,950"
                            percentage="3.25" 
                            icon="usd" 
                            isUpTrend />
                    </Card>
                </div>
                <div className={styles.section2}>
                    <Card headline="Most Viewed Product">
                        <SingleProduct 
                            imgSrc={appleImacImg} 
                            imgAlt="Apple Pro Display" 
                            amount="973" percentage="5.25" 
                            icon="eye" 
                            isUpTrend />
                    </Card>
                </div>
                <div className={styles.section3}>
                    <Card headline="Most Profitable Sections">
                        {/* start here for ranking */}
                    </Card>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
