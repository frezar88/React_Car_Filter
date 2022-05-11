import React from 'react';
import s from './CountBlock.module.scss'
import CarsStore from '../../../store/carsStore'
import {observer} from "mobx-react-lite";

const CountBlock = observer(() => {
    const change = (e) => {

    }
    return (
        <div className={s.countBlock}>
            <div>
                <h6>Найдено {CarsStore.CarsList.length} авто</h6>
                <h5>{'Авто в наличии'} </h5>
            </div>
            <div>
                <form className={s.form} onChange={change}>
                </form>
            </div>

        </div>
    );
});

export default CountBlock;