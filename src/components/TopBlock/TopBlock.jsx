import React, {useState} from 'react';
import s from './TopBlock.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import CarInfoStore from "../../store/CarInfoStore";


const TopBlock = () => {
    const [carsInfo] = useState(CarInfoStore.getCarInfo())
    const backPage = () => {
        window.history.back()
    }
    return (
        <div className={s.top_block}>
            <MyButton onClick={backPage} arrow={true} className={s.button}>К СПИСКУ АВТОМОБИЛЕЙ</MyButton>
            <div className={s.card}>
                <h3>{carsInfo.brand}  {carsInfo.model}</h3>
                <p>
                    {carsInfo.years+ ' год выпуска'}
                    <span className={s.dot}></span>
                    {carsInfo.millage+' км'}
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