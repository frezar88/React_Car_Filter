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
                <div className={s.tabs_desk}>
                    <MyTabs/>
                </div>

            </div>
            <div style={{display:'grid'}}>
                <div className={s.tabs_mob}>
                    <MyTabs/>
                </div>
                <CarCard/>
            </div>


        </div>
    );
};

export default CarInfoBlock;