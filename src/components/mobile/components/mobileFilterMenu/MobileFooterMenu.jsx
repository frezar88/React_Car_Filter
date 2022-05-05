import React from 'react';
import MyButton from "../../../UI/MyButton";
import s from './MobileFooterMenu.module.scss'
import UiStore from "../../../../store/uiStore";
import ResultStore from '../../../../store/resultStore'
import {observer} from "mobx-react-lite";

const MobileFooterMenu = observer(() => {
    return (
        <div className={s.footer}>
            <MyButton onClick={()=>UiStore.closeMobileMenu()}>Показать {ResultStore.CarsList.length} авто</MyButton>
        </div>
    );
});

export default MobileFooterMenu;