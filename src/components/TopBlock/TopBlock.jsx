import React from 'react';
import s from './TopBlock.module.scss'
import MyButton from "../UI/MyButton/MyButton";


const TopBlock = () => {
    return (
        <div className={s.top_block}>
            <MyButton arrow={true} className={s.button}>К СПИСКУ АВТОМОБИЛЕЙ</MyButton>
        </div>
    );
};

export default TopBlock;