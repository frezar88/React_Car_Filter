import React from 'react';
import s from './ResetFilterBlock.module.scss'
import MyButton from "../../UI/MyButton";
import CarsStore from "../../../store/carsStore";
import ChangeFormStore from "../../../store/changeFormStore";

const ResetFilterBlock = () => {
    const reset = ()=>{
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(el=>{
            el.click()
        })
    }
    return (
        <div className={s.resetBlock}>
            <MyButton onClick={reset} style={{height:50,fontSize:16}} >Очистить фильтр</MyButton>
        </div>
    );
};

export default ResetFilterBlock;