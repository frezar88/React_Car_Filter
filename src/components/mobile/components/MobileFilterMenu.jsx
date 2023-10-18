import React from 'react';
import s from './MobileFilterMenu.module.scss'
import MobileHeaderMenu from "./mobileFilterMenu/MobileHeaderMenu";
import MobileFooterMenu from "./mobileFilterMenu/MobileFooterMenu";
import UiStore from "../../../store/uiStore";
import {observer} from "mobx-react-lite";
import MobileContentMenu from "./mobileFilterMenu/MobileContentMenu";

const MobileFilterMenu = observer(() => {
    return (
        <div className={UiStore.getMobileMenu()? [s.mobileFilterMenu, s.active].join(' '): [s.mobileFilterMenu]}>
            <MobileHeaderMenu/>
            <MobileContentMenu/>
            <MobileFooterMenu/>

        </div>
    );
});

export default MobileFilterMenu;