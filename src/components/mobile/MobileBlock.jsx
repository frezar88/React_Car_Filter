import React from 'react';
import s from './MobileBlock.module.scss'
import MobileShowFilter from "./components/MobileShowFilter";
import MobileFilterMenu from "./components/MobileFilterMenu";
import UiStore from '../../store/uiStore'
import {observer} from "mobx-react-lite";

const MobileBlock = observer(() => {

    return (
        <div className={s.mobileBlock}>
            <MobileShowFilter onClick={()=> UiStore.showMobileMenu()}/>
            {
                UiStore.MobileMenu.show
                    ? <MobileFilterMenu/>
                    : false
            }

        </div>
    );
});

export default MobileBlock;