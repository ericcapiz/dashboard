import React from 'react';
import PropTypes from 'prop-types';
import RankingItem from '../RankingItem';



const Ranking = ({data}) => {
    return (
        <div className="w-100">
            {data.map((item, index)=>(
                <RankingItem  
                    key={`${item.name}-${index}`}
                    name={item.name}
                    index={item.index}
                    imgName={imgName}
                    upTrend={upTrend}
                    profit={item.profit} />
            ))}
        </div>
    )
}

export default Ranking

Ranking.propTypes = {
    data: PropTypes.array.isRequired,
};