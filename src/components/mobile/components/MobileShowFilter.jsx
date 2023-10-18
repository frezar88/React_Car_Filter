import React from 'react';
import s from './MobileShowFilter.module.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ResultStore from '../../../store/carsStore'
import {observer} from "mobx-react-lite";

const MobileShowFilter = observer(({...props}) => {
    return (
        <div {...props} className={s.mobileShowFilter}>
            <div>Фильтр</div>
            <div>
                <span>{ResultStore.CarsList.length} авто</span>
                <span><ArrowForwardIosIcon fontSize={'small'}/></span>
            </div>
        </div>
    );
});

export default MobileShowFilter;