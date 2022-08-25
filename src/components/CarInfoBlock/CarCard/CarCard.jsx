import React, {useState} from 'react';
import s from './CarCard.module.scss'
import MyButton from "../../UI/MyButton/MyButton";
import CarInfoStore from "../../../store/CarInfoStore";
import UserPrice from "../UserPrice/UserPrice";


const CarCard = () => {

    const [carData] = useState(CarInfoStore.getCarInfo())

    let millage = String(carData['millage']).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")

    const setDataForModal = (e) => {

        const modal = document.querySelector('.modal-car ')
        const html = document.querySelector('body')
        const btnSendModel = document.querySelector('.modal-car .modal-car__content .modal-form-send')
        btnSendModel.setAttribute('model', carData['brand'])
        btnSendModel.setAttribute('complectation', carData['model'])
        btnSendModel.setAttribute('years', carData["years"])
        btnSendModel.setAttribute('engine', carData["volume"])
        btnSendModel.setAttribute('power', carData["power"])
        btnSendModel.setAttribute('fueltype', carData["fueltype"])
        btnSendModel.setAttribute('drive_type_id', carData["drive_type_id"])
        btnSendModel.setAttribute('transmission_type', carData["transmission_type"])
        btnSendModel.setAttribute('price', carData["price"])
        btnSendModel.setAttribute('location', carData["location"])
        btnSendModel.setAttribute('vin', carData["vin"])

        html.style.overflow = 'hidden'
        modal.classList.add('active')

        let content = document.querySelector('.modal-car__content')
        let contentSuccess = document.querySelector('.modal-car__content-success')
        contentSuccess['style'].display = 'none'

        content['style'].display = 'block'

    }

    return (

        <div className={s.car_card}>
            <div className={s.car_card_wrapper}>
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
                        {carData['generation'] && carData['equipment'] && carData['facelifting'] ?
                            <span className={s.dot}></span> : ''} {carData['facelifting']}</p>
                </div>
                <div className={s.features}>
                    <ul>
                        <li>
                            <b>Двигатель:</b> {String(carData.volume).length === 1 ? carData.volume + '.0' : carData.volume} л., {carData.power} л.с., {carData.fueltype}
                        </li>
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
                    <MyButton data-stop={'stop'} onClick={setDataForModal}>зарезервировать</MyButton>
                </div>
                <div className={s.location}>
                    <p>{carData.location}</p>
                </div>

            </div>
            {/*<UserPrice car_price={carData.price}/>*/}
        </div>
    );
};

export default CarCard;