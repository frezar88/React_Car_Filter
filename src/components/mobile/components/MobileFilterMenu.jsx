import React from 'react';
import s from './MobileFilterMenu.module.scss'
import MobileHeaderMenu from "./mobileFilterMenu/MobileHeaderMenu";
import MobileFooterMenu from "./mobileFilterMenu/MobileFooterMenu";

const MobileFilterMenu = () => {
    return (
        <div className={s.mobileFilterMenu}>
            <MobileHeaderMenu/>
            {/*<MobileContentMenu/>*/}
            <MobileFooterMenu/>

        </div>
    );
};

export default MobileFilterMenu;