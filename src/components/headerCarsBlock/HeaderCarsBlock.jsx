import React from 'react';
import s from './HeaderCarsBlock.module.scss'
import {BRAND_NAME} from "../../const";
import Title from "../UI/Title";
import CarList from "./components/CarList";

const HeaderCarsBlock = () => {
    return (
        <div className={s.headerCarBlock}>
            <div className={s.wrapper}>
                <Title className={s.title}>{BRAND_NAME} в наличии</Title>
                <CarList/>
            </div>
        </div>
    );
};

export default HeaderCarsBlock;