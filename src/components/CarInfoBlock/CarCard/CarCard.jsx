import React from 'react';
import s from './CarCard.module.scss'

const CarCard = () => {
    return (
        <div className={s.car_card}>
            <div>
                <h5 className={s.car_name}>Nissan X-Trail LE Top Coffee</h5>
                <p className={s.year}>2022</p>
            </div>
            <div className={s.features}>
                <ul>
                    <li>{'2.5'} л., {'171'} л.с., {'Бензин'}</li>
                    <li>Вариатор</li>
                    <li>{'8,3'} л. по городу</li>
                    <li>Полный привод</li>
                </ul>
            </div>

        </div>
    );
};

export default CarCard;