import React from 'react';
import s from './CarInfoBlock.module.scss'
import MySlider from "../UI/MySlider/MySlider";
import CarCard from "./CarCard/CarCard";

const CarInfoBlock = () => {
    return (
        <div className={s.car_info_block}>
            <MySlider emulateTouch={true} infiniteLoop={true}/>
            <CarCard/>

        </div>
    );
};

export default CarInfoBlock;