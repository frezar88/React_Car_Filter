import React from 'react';
import s from './CarListItem.module.scss'

const CarListItem = ({imgPath,carName}) => {
    return (
        <div className={s.carListItem}>
            <img src="https://stock.mitsubishi.by/images/mitsubishi/000001986/ga_m11.png" alt="cars"/>
            <h6>Обновлённый Outlander</h6>
        </div>
    );
};

export default CarListItem;