import React from 'react'
import s from './SortBarBlock.module.scss'
import SortingPyramid from "../../UI/SortingPyramid";

const SortBarBlock = () => {
    return (
        <div className={s.sortBarBlock}>
            <div>Сортировать по</div>
            <SortingPyramid/>
        </div>
    );
};

export default SortBarBlock;