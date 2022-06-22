import React, {useState} from 'react';
import s from './TopBlock.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import CarInfoStore from "../../store/CarInfoStore";
import UiStore from "../../store/uiStore";


const TopBlock = () => {
    const [carsInfo] = useState(CarInfoStore.getCarInfo())

    return (
        <div className={s.top_block}>
            <MyButton onClick={()=>UiStore.setPage('filter')} arrow={true} className={s.button}>К СПИСКУ АВТОМОБИЛЕЙ</MyButton>
            <div className={s.card}>
                <h3>{carsInfo.brand}  {carsInfo.model}</h3>
                <p>
                    {carsInfo.years}
                    <span className={s.dot}></span>
                    {carsInfo.complectation}
                    {
                        carsInfo.modification
                            ? <>
                                <span className={s.dot}></span>
                                {carsInfo.modification}
                            </>
                            : ''
                    }

                </p>
                <p><span>цвет кузова: </span>{carsInfo.color}</p>

            </div>

        </div>

    );
};

export default TopBlock;