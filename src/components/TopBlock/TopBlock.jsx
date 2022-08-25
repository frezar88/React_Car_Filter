import React, {useState} from 'react';
import s from './TopBlock.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import CarInfoStore from "../../store/CarInfoStore";


const TopBlock = () => {
    const [carsInfo] = useState(CarInfoStore.getCarInfo())
    const backPage = () => {
        // window.history.back()
        window.location.href = '/new-filter'
    }
    return (
        <div className={s.top_block}>
            <MyButton onClick={backPage} arrow={true} className={s.button}>К СПИСКУ АВТОМОБИЛЕЙ</MyButton>
            <div className={s.card}>
                <h3> <span></span>{carsInfo.brand}  {carsInfo.model}  <span className={s.dot}></span> {}</h3>
                <p style={{display:'flex',gap:'8px'}}>
                    {carsInfo.years+ ' год выпуска'}
                    <span className={s.dot}></span>
                    {String(carsInfo['millage']).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")+' км'}
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
                {/*<p><span>цвет кузова: </span>{carsInfo.color}</p>*/}

            </div>

        </div>

    );
};

export default TopBlock;