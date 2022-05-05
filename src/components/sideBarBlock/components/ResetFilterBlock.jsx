import React from 'react';
import s from './ResetFilterBlock.module.scss'
import MyButton from "../../UI/MyButton";

const ResetFilterBlock = () => {
    return (
        <div className={s.resetBlock}>
            <MyButton style={{height:50,fontSize:16}} >Очистить фильтр</MyButton>
        </div>
    );
};

export default ResetFilterBlock;