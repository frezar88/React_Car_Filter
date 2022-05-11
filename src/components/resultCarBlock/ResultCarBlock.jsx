import React from 'react';
import s from './ResultCarBlock.module.scss'
import SortBarBlock from "./components/SortBarBlock";
import ResultBlockList from "./components/ResultBlockList";
import {observer} from "mobx-react-lite";
import CarsStore from '../../store/carsStore'
import Spinner from "../UI/Spinner";

const ResultCarBlock = observer(() => {
    return (
        <div className={s.resultCarBlock}>
            {/*<MobileBlock/>*/}
            <SortBarBlock/>
            {
                CarsStore.CarsList.length
                    ? <ResultBlockList/>
                    : <Spinner/>
            }
        </div>
    );
});

export default ResultCarBlock;

