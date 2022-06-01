import React from 'react';
import s from './ResultCarBlock.module.scss'
import SortBarBlock from "./components/SortBarBlock";
import ResultBlockList from "./components/ResultBlockList";
import {observer} from "mobx-react-lite";
import CarsStore from '../../store/carsStore'
import Spinner from "../UI/Spinner";
import MobileBlock from "../mobile/MobileBlock";
import UiStore from "../../store/uiStore";

const ResultCarBlock = observer(() => {
    return (
        <div className={s.resultCarBlock}>
            <MobileBlock/>
            <SortBarBlock/>
            {
                CarsStore.CarsList.length
                    ? <ResultBlockList/>
                    : UiStore.getShowNoCar()
                        ? <div style={{
                            height:'100%',
                            maxHeight:800,
                            background:'#fff',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:"center"
                        }}>
                            <h1 style={{fontSize:18}}>Автомобили не найдены</h1>
                        </div>
                        : <Spinner/>

            }
        </div>
    );
});

export default ResultCarBlock;

