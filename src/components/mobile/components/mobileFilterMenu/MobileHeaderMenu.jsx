import React from 'react';
import s from "./MobileHeaderMenu.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import MyButton from "../../../UI/MyButton";
import UiStore from '../../../../store/uiStore'

const MobileHeaderMenu = () => {

    return (
        <div className={s.header}>
            <div>
                <p>Расширенный поиск</p>
            </div>
            <MyButton onClick={()=>UiStore.closeMobileMenu()}><CloseIcon fontSize={'large'}/></MyButton>

        </div>
    );
};

export default MobileHeaderMenu;