import React, {useEffect, useState} from 'react';
import ResultBlockListItem from "./ResultBlockListItem";
import s from './ResultBlockList.module.scss';
import CarsStore from '../../../store/carsStore';
import {observer} from "mobx-react-lite";
import UiStore from "../../../store/uiStore";
import ChangeFormStore from "../../../store/changeFormStore";

const ResultBlockList = observer(() => {

    const [loadCars, setLoadCars] = useState(false)



    useEffect(() => {
        if (loadCars) {
            UiStore.setArrayCountSlice(UiStore.getArrayCountSlice() + 27)
        }
        setLoadCars(false)
    }, [loadCars])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 450 && UiStore.getArrayCountSlice() < CarsStore.CarsList.length) {

            console.log(UiStore.getArrayCountSlice())
            setLoadCars(true)
        }

    }

    return (
        <div className={s.resultBlockList}>
            {
                CarsStore.CarsList
                    .filter(({price}) => ChangeFormStore.getChangePrice().min ? price >= ChangeFormStore.getChangePrice().min : price)
                    .filter(({price}) => ChangeFormStore.getChangePrice().max ? price <= ChangeFormStore.getChangePrice().max : price)
                    .slice(0, UiStore.getArrayCountSlice())
                    .map((item) =>
                        <ResultBlockListItem key={item['car_id']}
                                             body={item.body} car_id={item.car_id}
                                             color={item.color}
                                             complectation={item.complectation}
                                             drive_type_id={item.drive_type_id} engine={item.engine}
                                             fueltype={item.fueltype}
                                             image={item.image} location={item.location} model={item.model}
                                             power={item.power} price={item.price}
                                             price2={item.price2} ru_price={item['price-rus']}
                                             seat_count={item['seat-count']}
                                             transmission_type={item.transmission_type}
                                             years={item.years} promo={item.promo} reserved={item.reserved}
                                             vin={item.vin}
                        />
                    )
            }


        </div>
    );
});

export default ResultBlockList;