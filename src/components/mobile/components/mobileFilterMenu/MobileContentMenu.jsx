import React from 'react';
import AccordionBlock from "../../../UI/AccordionBlock";
import s from "../../../sideBarBlock/SideBarBlock.module.scss";
import RangeSlider from "../../../UI/MyInputRange";
import FilterStore from "../../../../store/filterStore";
import {observer} from "mobx-react-lite";
import {FormControlLabel, Typography} from "@mui/material";
import CustomizedCheckbox from "../../../UI/MyInputCheckBox";
import {giveClassNameActiveOrDisabled} from "../../../../const";
import ActualStoreFilters from "../../../../store/actualStoreFilters";

const MobileContentMenu = observer(() => {
    return (
        <div>
            <div className={s.wrapper}>
                { FilterStore.getStartedBrand() && FilterStore.getStartedBrand().length !== 1
                    ?
                    <AccordionBlock open={false} name={'Бренд'}>
                        <div className={s.accordContainer}>
                            {
                                FilterStore.getStartedBrand().map((el) =>
                                    <FormControlLabel
                                        key={el}
                                        control={<CustomizedCheckbox
                                            disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualBrand(), '1')}
                                            data-name={'brand'} name={el}/>}
                                        label={<Typography className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualBrand())} >{el}</Typography>}
                                    />
                                )
                            }
                        </div>
                    </AccordionBlock>
                    :
                    false
                }

                <AccordionBlock open={false} name={'Модель'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedModel().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox
                                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualModel(), '1')}
                                        data-name={'model'} name={el}/>}
                                    label={<Typography
                                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualModel())}> {el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>


                <AccordionBlock open={false} name={'Цена'}
                                id={'price'}>
                    {
                        FilterStore.getStartedPrice()["min"]
                            ? <RangeSlider/>
                            : false
                    }
                </AccordionBlock>


                {/*<AccordionBlock open={false} name={'Год'}>*/}
                {/*    <div className={s.accordContainer}>*/}
                {/*        {*/}
                {/*            FilterStore.getStartedYear().map((el) =>*/}
                {/*                <FormControlLabel*/}
                {/*                    key={el}*/}
                {/*                    control={<CustomizedCheckbox*/}
                {/*                        disabled={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualYear(), '1')}*/}
                {/*                        data-name={'year'} name={el}/>}*/}
                {/*                    label={<Typography*/}
                {/*                        className={giveClassNameActiveOrDisabled(el, ActualStoreFilters.getActualYear())}>{el}</Typography>}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</AccordionBlock>*/}
                <AccordionBlock open={false} name={'КПП'}>
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
                <AccordionBlock open={false} name={'Привод'}>
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
                <AccordionBlock open={false} name={'Кузов'}>
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
                <AccordionBlock open={false} name={'Дилер'}>
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
                <AccordionBlock open={false} name={'Цвет'}>
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
            </div>
        </div>
    );
});

export default MobileContentMenu;