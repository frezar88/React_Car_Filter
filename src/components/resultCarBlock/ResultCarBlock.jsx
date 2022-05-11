import React from 'react';
import s from './ResultCarBlock.module.scss'
import SortBarBlock from "./components/SortBarBlock";
import ResultBlockList from "./components/ResultBlockList";
import MobileBlock from "../mobile/MobileBlock";
import {observer} from "mobx-react-lite";
import ResultStore from '../../store/resultStore'
import Spinner from "../UI/Spinner";

const ResultCarBlock = observer(() => {
    return (
        <div className={s.resultCarBlock}>
            {/*<MobileBlock/>*/}
            <SortBarBlock/>
            {
                ResultStore.CarsList[0]
                    ? <ResultBlockList/>
                    : <Spinner/>
            }
        </div>
    );
});

export default ResultCarBlock;