import React from 'react';
import s from './CountBlock.module.scss'
import ResultStore from '../../../store/resultStore'
import {observer} from "mobx-react-lite";

const CountBlock = observer(() => {

    return (
        <div className={s.countBlock}>
            <h6>Найдено {ResultStore.CarsList.length} авто</h6>
            <h5>Авто в наличии</h5>
        </div>
    );
});

export default CountBlock;