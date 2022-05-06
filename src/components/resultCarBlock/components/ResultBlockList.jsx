import React from 'react';
import ResultBlockListItem from "./ResultBlockListItem";
import s from './ResultBlockList.module.scss';
import ResultStore from '../../../store/resultStore';
import {observer} from "mobx-react-lite";

const ResultBlockList = observer(() => {

    return (
        <div className={s.resultBlockList}>
            {ResultStore.CarsList.map((item) =>
                <ResultBlockListItem key={item.car_id} body={item.body} car_id={item.car_id} color={item.color}
                                     complectation={item.complectation}
                                     drive_type_id={item.drive_type_id} engine={item.engine} fueltype={item.fueltype}
                                     image={item.image} location={item.location} model={item.model} power={item.power} price={item.price}
                                     price2={item.price2} seat_count={item['seat-count']} transmission_type={item.transmission_type}
                                     years={item.years} promo={item.promo}
                />
            )}


        </div>
    );
});

export default ResultBlockList;