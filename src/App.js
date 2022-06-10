import React, {useEffect} from 'react';
import s from './App.module.scss'
import TopBlock from "./components/TopBlock/TopBlock";
import CarInfoBlock from "./components/CarInfoBlock/CarInfoBlock";
import {axiosGetCarInfo} from "./http/requests";
import CarInfoStore from "./store/CarInfoStore";
import UiStore from "./store/uiStore";
import Spinner from "./components/UI/MySpinner/Spinner";
import {observer} from "mobx-react-lite";
import MapCars from "./components/MapCars/MapCars";

const App = observer(() => {
    useEffect(() => {
        const url = new URL(window.location.href)
        const car_id = url.searchParams.get('car_id')
        axiosGetCarInfo(car_id).then((data) => {
            CarInfoStore.setCarInfo(data.data['car'])
            CarInfoStore.setAccordData(data.data['car'])
            UiStore.setSpinnerState(false)
        })
    }, [])

    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                {
                    UiStore.getSpinnerState()
                        ? <Spinner/>
                        : <>
                            <TopBlock/>
                            <CarInfoBlock/>
                            <MapCars/>
                        </>
                }

            </div>
        </div>
    );
});

export default App;