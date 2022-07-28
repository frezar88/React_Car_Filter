import React, {useState} from 'react';
import s from './CarCard.module.scss'
import MyButton from "../../UI/MyButton/MyButton";
import CarInfoStore from "../../../store/CarInfoStore";


const CarCard = () => {

    const [carData] = useState(CarInfoStore.getCarInfo())

    let millage = String(carData['millage']).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")

    return (
        <div className={s.car_card}>
            <div>
                <h5 className={s.car_name}><span>{carData.brand} {carData.model}</span></h5>
                <p className={s.complectation}> {carData.complectation}</p>
                <p className={s.year}>{carData.years + ' год выпуска'} <span className={s.dot}></span>
                    {millage} км
                </p>
                <p
                    style={{
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px'
                    }}
                > {carData['generation']} {(carData['generation'] && carData['equipment']) || (carData['equipment'] && carData['facelifting']) ||
                (carData['generation'] && carData['facelifting']) ? <span className={s.dot}></span> : ''}
                    {carData['equipment']}
                    {carData['generation'] && carData['equipment'] && carData['facelifting'] ? <span className={s.dot}></span> :''}  {carData['facelifting']}</p>
            </div>
            <div className={s.features}>
                <ul>
                    <li><b>Двигатель:</b> {String(carData.volume).length ==1  ? carData.volume+'.0':carData.volume} л., {carData.power} л.с., {carData.fueltype}</li>
                    <li><b>Кпп:</b> {carData['transmission_type'] + ' (' + carData['transmission_name'] + ')'}</li>
                    <li><b>Кузов:</b> {carData.body}</li>
                    <li><b>Привод:</b> {carData['drive_type_id']}</li>
                    <li><b>Цвет:</b> {carData['color']}</li>
                </ul>
            </div>
            <div className={s.price}>
                <h5>{carData.price ? String(carData.price).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") : ''} BYN</h5>
            </div>
            <div className={s.button}>
                <MyButton>зарезервировать</MyButton>
            </div>
            <div className={s.location}>
                <p>{carData.location}</p>

            </div>

        </div>
    );
};

export default CarCard;