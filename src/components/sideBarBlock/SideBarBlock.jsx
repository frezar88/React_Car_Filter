import React from 'react';
import s from './SideBarBlock.module.scss'
import CountBlock from "./components/CountBlock";
import AccordionBlock from "../UI/AccordionBlock";
import ResetFilterBlock from "./components/ResetFilterBlock";
import {observer} from "mobx-react-lite";
import CustomizedCheckbox from "../UI/MyInputCheckBox";
import {FormControlLabel, Typography} from "@mui/material";
import FilterStore from "../../store/filterStore";
import ActualStoreFilters from "../../store/actualStoreFilters";
import {giveClassNameActiveOrDisabled} from "../../const";
import RangeSlider from "../UI/MyInputRange";
import RangeSliderYear from "../UI/MyInputRangeYear";
import RangeSliderPower from "../UI/MyInputRangePowerEngine";
import ChangeFormStore from "../../store/changeFormStore";


const SideBarBlock = observer(() => {

    return (
        <div className={s.sideBarBlock}>
            <div className={s.wrapper}>
                <CountBlock/>
                {FilterStore.getStartedBrand() && FilterStore.getStartedBrand().length !== 1
                    ?
                    <AccordionBlock open={true} name={'Бренд'}>
                        <div className={s.accordContainer}>
                            {
                                FilterStore.getStartedBrand().map((el) =>
                                    <FormControlLabel
                                        key={el}
                                        control={<CustomizedCheckbox
                                            disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualBrand(), '1')}
                                            data-name={'brand'} name={el}/>}
                                        label={<Typography
                                            className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualBrand())}>{el}</Typography>}
                                    />
                                )
                            }
                        </div>
                    </AccordionBlock>
                    :
                    false
                }
                {/*ChangeFormStore.getChangeBrand()*/}
                <AccordionBlock  open={true} name={'Модель'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedClass().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualClass(), '1')}
                                        data-name={'class_car'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualClass())}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>

                {/*<AccordionBlock open={true} name={'Модель'}>*/}
                {/*    <div className={s.accordContainer}>*/}
                {/*        {*/}
                {/*            FilterStore.getStartedModel().map((el) =>*/}
                {/*                <FormControlLabel*/}
                {/*                    key={el}*/}
                {/*                    control={<CustomizedCheckbox*/}
                {/*                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualModel(), '1')}*/}
                {/*                        data-name={'model'} name={el}/>}*/}
                {/*                    label={<Typography*/}
                {/*                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualModel())}> {el}</Typography>}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</AccordionBlock>*/}
                <AccordionBlock open={true} name={'Цена'}
                                id={'price'}>
                    {
                        FilterStore.getStartedPrice()["min"]
                            ? <RangeSlider/>
                            : false
                    }
                </AccordionBlock>
                <AccordionBlock open={true} name={'Год'}>
                    {
                        FilterStore.getStartedYear()["min"]
                            ? <RangeSliderYear/>
                            : false
                    }
                </AccordionBlock>
                <AccordionBlock open={true} name={'Мощность'}>
                    {
                        FilterStore.getStartedPowerEngine()["min"]
                            ? <RangeSliderPower/>
                            : false
                    }
                </AccordionBlock>
                <AccordionBlock open={true} name={'Топливо'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedFuelType().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualFuelType(), '1')}
                                        data-name={'fuel_type'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualFuelType())}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <AccordionBlock open={true} name={'КПП'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedTransmission().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualTransmission(), '1')}
                                        data-name={'transmission_type'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualTransmission())}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <AccordionBlock open={true} name={'Привод'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedDrive().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualDrive(), '1')}
                                        data-name={'drive_type_id'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualDrive())}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>

                <AccordionBlock open={true} name={'Кузов'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedBody().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualBody(), '1')}
                                        data-name={'body'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualBody(),)}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <AccordionBlock open={true} name={'Дилер'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedLocation().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualLocation(), '1')}
                                        data-name={'location'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualLocation(),)}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <AccordionBlock open={true} name={'Цвет'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedColor().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualColor(), '1')}
                                        data-name={'color'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualColor(),)}>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <ResetFilterBlock/>
            </div>
        </div>
    );
});

export default SideBarBlock;