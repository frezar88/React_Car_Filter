import React from 'react';
import s from './SideBarBlock.module.scss'
import CountBlock from "./components/CountBlock";

import ResetFilterBlock from "./components/ResetFilterBlock";

import FilterStore from '../../store/filterStore'
import {observer} from "mobx-react-lite";
import ResultStore from "../../store/resultStore";
import {debounce} from "../../const";


const SideBarBlock = observer(() => {

    const changeForm = () => {
        FilterStore.getStartedFilters()
        ResultStore.getStartedCars()
        console.log(ResultStore.BrandCarList)

    }
    let debounceOnChangeForm = debounce(changeForm, 500);

    return (
        <div className={s.sideBarBlock}>
            <div className={s.wrapper}>
                <CountBlock/>
                <form onChange={debounceOnChangeForm}>


                </form>
                <ResetFilterBlock/>
            </div>
        </div>
    );
});

export default SideBarBlock;