import React, {useEffect} from 'react';
import s from './App.module.scss'
import TopBlock from "./components/TopBlock/TopBlock";
import CarInfoBlock from "./components/CarInfoBlock/CarInfoBlock";
import {axiosAllCars, axiosGetCarInfo} from "./http/requests";
import CarInfoStore from "./store/CarInfoStore";
import UiStore from "./store/uiStore";
import Spinner from "./components/UI/MySpinner/Spinner";
import {observer} from "mobx-react-lite";
import MapCars from "./components/MapCars/MapCars";
import RecommendedCars from "./components/RecommendedCars/RecommendedCars";

const App = observer(() => {
    useEffect(() => {
        const url = new URL(window.location.href)
        const uid = url.searchParams.get('uid')
        axiosGetCarInfo(uid).then((data) => {
            if(!data.data['car']){
                window.location.href = '/new-filter';
            }

            CarInfoStore.setCarInfo(data.data['car'])
            CarInfoStore.setAccordData(data.data['car'])
            CarInfoStore.setModificationData(data.data['car'])
            UiStore.setSpinnerState(false)
        }).finally(

        )
        axiosAllCars().then((data)=>{
            CarInfoStore.setRecommendedCars(data.data['cars'])
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
                            <RecommendedCars/>
                            <MapCars/>
                        </>
                }

            </div>
        </div>
    );
});

export default App;