import React from 'react';
import StatsItem from '../StatsItem';

const Stats = () => {
    return (
        <div className="d-flex flex-xl-column justify-content-xl-center justify-content-around w-100 text-center h-100">
            <StatsItem number="1135" description="Items on sale" /> 
            <StatsItem number="256" description="Sales this month" />   
        </div>
    )
}

export default Stats
