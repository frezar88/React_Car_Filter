import React from 'react';
import s from './MobileBlock.module.scss'
import MobileShowFilter from "./components/MobileShowFilter";
import UiStore from '../../store/uiStore'
import {observer} from "mobx-react-lite";
import MobileFilterMenu from "./components/MobileFilterMenu";

const MobileBlock = observer(() => {

    return (
        <div className={s.mobileBlock}>
            <MobileShowFilter onClick={()=> UiStore.showMobileMenu()}/>
            <MobileFilterMenu />

        </div>
    );
});

export default MobileBlock;