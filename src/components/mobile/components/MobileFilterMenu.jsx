import React from 'react';
import s from './MobileFilterMenu.module.scss'
import MobileHeaderMenu from "./mobileFilterMenu/MobileHeaderMenu";
import MobileFooterMenu from "./mobileFilterMenu/MobileFooterMenu";
import MobileContentMenu from "./mobileFilterMenu/MobileContentMenu";

const MobileFilterMenu = ({...props}) => {
    return (
        <div {...props} className={s.mobileFilterMenu}>
            <MobileHeaderMenu/>
            <MobileContentMenu/>
            <MobileFooterMenu/>

        </div>
    );
};

export default MobileFilterMenu;