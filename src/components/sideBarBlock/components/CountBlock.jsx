import React from 'react';
import s from './CountBlock.module.scss'
import CarsStore from '../../../store/carsStore'
import {observer} from "mobx-react-lite";
import FilterStore from "../../../store/filterStore";
import {FormControlLabel, Typography} from "@mui/material";
import CustomizedCheckbox from "../../UI/MyInputCheckBox";
import {giveClassNameActiveOrDisabled} from "../../../const";
import ActualStoreFilters from "../../../store/actualStoreFilters";
import AccordionBlock from "../../UI/AccordionBlock";

const CountBlock = observer(() => {


    return (
        <div className={s.countBlock}>
            <div>
                <h6 style={{textAlign:'center', padding:'20px 0 0',background:'#fff',margin:0}}>Найдено {CarsStore.CarsList.length} авто</h6>
                {/*<h5>{'Авто в наличии'} </h5>*/}
            </div>
            <div>
                <AccordionBlock open={true} style={{marginBottom: 20,boxShadow:'none'}} name={'Спецпредложение'}>
                    <div style={{display:'grid',gridGap:0}}>
                        {
                            FilterStore.getStartedPromo().map(el =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualPromo(), '1')}
                                        data-name={'promo'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualPromo(),)}>{el} ({FilterStore.getCountPromo()[el] + 1})</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
            </div>

        </div>
    );
});

export default CountBlock;