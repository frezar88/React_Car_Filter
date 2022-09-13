import React from 'react';
import s from './ResetFilterBlock.module.scss'
import MyButton from "../../UI/MyButton";

const ResetFilterBlock = () => {

    const reset=()=>{
        const inputs = document.getElementById('root').querySelectorAll('form input:checked')
        console.log(inputs)
        inputs.forEach((el)=>{
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