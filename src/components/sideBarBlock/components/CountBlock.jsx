import React from 'react';
import s from './CountBlock.module.scss'
import CarsStore from '../../../store/carsStore'
import {observer} from "mobx-react-lite";
import FilterStore from "../../../store/filterStore";
import {FormControlLabel, Typography} from "@mui/material";
import CustomizedCheckbox from "../../UI/MyInputCheckBox";

const CountBlock = observer(() => {
    return (
        <div className={s.countBlock}>
            <div>
                <h6>Найдено {CarsStore.CarsList.length} авто</h6>
                <h5>{'Авто в наличии'} </h5>
            </div>
            <div>
                {
                    FilterStore.getStartedPromo().map(el =>
                        <FormControlLabel
                            key={el}
                            control={<CustomizedCheckbox data-name={'promo'} name={el}/>}
                            label={<Typography>{el} ({FilterStore.getCountPromo()[el] + 1})</Typography>}
                        />
                    )
                }
                {

                }
            </div>

        </div>
    );
});

export default CountBlock;