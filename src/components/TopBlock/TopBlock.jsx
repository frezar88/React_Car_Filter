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
                <h3>{carsInfo.brand}  {carsInfo.model}  <span className={s.dot}></span> <span style={{color:'#818181'}}>{carsInfo.years}</span></h3>
                <p style={{display:'flex',gap:'8px'}}>
                    {carsInfo.generation}
                    {carsInfo.facelifting ||carsInfo.modification ?  <span className={s.dot}></span>:''}
                    {carsInfo.facelifting?carsInfo.facelifting:''}
                    {carsInfo.facelifting && carsInfo.modification ? <span className={s.dot}></span>:''}
                    {carsInfo.modification?'модификация:':''} {carsInfo.modification}
                    {/*{String(carsInfo['millage']).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")+' км'}*/}
                    {carsInfo.complectation}
                </p>
                <p><span style={{color:'#818181'}}>цвет кузова: </span>{carsInfo.color}</p>
                <p><span style={{color:'#818181'}}>цвет салона: </span>{carsInfo.color}</p>

            </div>

        </div>

    );
};

export default TopBlock;