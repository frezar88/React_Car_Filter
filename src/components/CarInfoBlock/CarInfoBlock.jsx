import React from 'react';
import s from './CarInfoBlock.module.scss'
import MySlider from "../UI/MySlider/MySlider";
import CarCard from "./CarCard/CarCard";
import MyTabs from "../UI/MyTabs/MyTabs";

const CarInfoBlock = ({setShowFullScreen}) => {
    return (
        <div className={s.car_info_block}>
            <div>
                <MySlider setShowFullScreen={setShowFullScreen} emulateTouch={true} infiniteLoop={true}/>
                <MyTabs/>
            </div>

            <CarCard/>

        </div>
    );
};

export default CarInfoBlock;