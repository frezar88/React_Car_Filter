import React from 'react';
import s from './RecommendedCars.module.scss'
import CarInfoStore from "../../store/CarInfoStore";
import RecommendedItem from "./item/RecommendedItem";
import {observer} from "mobx-react-lite";

const RecommendedCars = observer (() => {
    let carBody = CarInfoStore.getCarInfo().body
    let carPrice = CarInfoStore.getCarInfo().price
    let percent = CarInfoStore.getCarInfo().price / 100 * 30
    let carId = CarInfoStore.getCarInfo().car_id
    let maxPrice = carPrice + percent
    let minPrice = carPrice - percent
    let allCars = CarInfoStore.getRecommendedCars().filter((item) =>
        item.body === carBody && (item.price >= minPrice && item.price <= maxPrice) && item['car_id'] !== carId

    )
    return (
        <>
            {
                allCars[0]
                    ? <div className={s.block}>
                        <h3>Похожие автомобили</h3>
                        <div className={s.list}>
                            {
                                allCars[0]
                                    ? allCars.slice(0, 4).map((item, index) =>
                                        <RecommendedItem
                                            key={item['car_id']}
                                            body={item.body} car_id={item.car_id}
                                            color={item.color} complectation={item.complectation}
                                            drive_type_id={item.drive_type_id} engine={item.volume}
                                            fueltype={item.fueltype} brand={item.brand}
                                            // image={item.image} location={item.location} model={item.model}
                                            image={item.images} location={item.location} model={item.model}
                                            power={item.power} price={item['price']}
                                            price2={item['price-2']} ru_price={item['price-rus']}
                                            seat_count={item['seat-count']}
                                            transmission_type={item.transmission_type}
                                            years={item.years} promo={item.promo} reserved={item.reserved}
                                            vin={item.vin} modification={item.modification}
                                            regionPrice={1111} generation={item.generation}
                                            facelifting={item.facelifting} equipment={item.equipment}
                                            uid={item['UID']}
                                        />
                                    )
                                    : ''
                            }
                        </div>


                    </div>
                    : ''
            }
        </>

    );
});

export default RecommendedCars;