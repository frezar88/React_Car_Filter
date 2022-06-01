import React from 'react';
import s from './TopBlock.module.scss'
import MyButton from "../UI/MyButton/MyButton";


const TopBlock = () => {
    const backPage = ()=>{
        window.history.back()
    }
    return (
        <div className={s.top_block}>
            <MyButton onClick={backPage} arrow={true} className={s.button}>К СПИСКУ АВТОМОБИЛЕЙ</MyButton>
        </div>
    );
};

export default TopBlock;