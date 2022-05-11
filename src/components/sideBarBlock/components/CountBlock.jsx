import React from 'react';
import s from './CountBlock.module.scss'
import ResultStore from '../../../store/resultStore'
import {observer} from "mobx-react-lite";
import {FormControlLabel, Typography} from "@mui/material";
import CustomizedCheckbox from "../../UI/MyInputCheckBox";

const CountBlock = observer(() => {
    const change = (e) => {
        let inputName = e.target.attributes['name'].value
        if (e.target.checked) {
            ResultStore.setActivePromo([...ResultStore.ActivePromo, inputName])
        } else {
            ResultStore.setActivePromo(ResultStore.ActivePromo.filter(item => item !== inputName))
        }
        ResultStore.getStartedCars()
    }
    return (
        <div className={s.countBlock}>
            <div>
                <h6>Найдено {ResultStore.CarsList.length} авто</h6>
                <h5>{ResultStore.Promo.length ? 'Cпецпредложение' : 'Авто в наличии'} </h5>
            </div>
            <div>
                <form className={s.form} onChange={change}>
                    {
                        ResultStore.Promo.length
                            ?
                            ResultStore.Promo.map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={
                                            !ResultStore.HiddenPromo.length
                                                ? ''
                                                : ResultStore.HiddenPromo[0] === 'clear'
                                                    ? s.disabled
                                                    : ResultStore.HiddenPromo.includes(el)
                                                        ? ''
                                                        : s.disabled
                                        }
                                        data-name={'1'} name={el}/>}
                                    label={<Typography className={
                                        !ResultStore.HiddenPromo.length
                                            ? ''
                                            : ResultStore.HiddenPromo[0] === 'clear'
                                                ? s.disabled
                                                : ResultStore.HiddenPromo.includes(el)
                                                        ? ''
                                                        : s.disabled
                                    }>{el} ({ResultStore.CountPromo[el] + 1})</Typography>}
                                />
                            ) :
                            false
                    }
                </form>

            </div>

        </div>
    );
});

export default CountBlock;