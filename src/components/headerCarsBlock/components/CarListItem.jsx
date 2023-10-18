import React from 'react';
import s from './CarListItem.module.scss'

const CarListItem = ({imgPath,carName,data}) => {
    return (
        <div className={s.carListItem}>
            <img src={ "https://stock.mitsubishi.by/"+ data.image}  alt="cars"/>
            <h6>{data.model}</h6>
        </div>
    );
};

export default CarListItem;