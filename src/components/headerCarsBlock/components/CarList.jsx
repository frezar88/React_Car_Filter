import React, {useEffect} from 'react';
import s from './CarList.module.scss'
import CarListItem from "./CarListItem";
import CarsStore from "../../../store/carsStore";
import ChangeFormStore from "../../../store/changeFormStore";
import UiStore from "../../../store/uiStore";
import {observer} from "mobx-react-lite";

const CarList = observer(() => {
    useEffect(()=>{console.log(        CarsStore.CarsList)},[CarsStore.CarsList])
    return (
        <div className={s.carList}>
            {
                CarsStore.CarsList
                    .filter(({price}) => ChangeFormStore.getChangePrice().min ? price >= ChangeFormStore.getChangePrice().min : price)
                    .filter(({price}) => ChangeFormStore.getChangePrice().max ? price <= ChangeFormStore.getChangePrice().max : price)
                    .map((el)=>
                    <CarListItem data={el}/>
                )
            }



        </div>
    );
});

export default CarList;