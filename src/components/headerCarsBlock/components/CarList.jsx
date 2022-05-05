import React from 'react';
import s from './CarList.module.scss'
import CarListItem from "./CarListItem";

const CarList = () => {
    return (
        <div className={s.carList}>
            <CarListItem/>
            <CarListItem/>
            <CarListItem/>
            <CarListItem/>

        </div>
    );
};

export default CarList;