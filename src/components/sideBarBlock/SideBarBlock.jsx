import React from 'react';
import s from './SideBarBlock.module.scss'
import CountBlock from "./components/CountBlock";
import AccordionBlock from "../UI/AccordionBlock";
import ResetFilterBlock from "./components/ResetFilterBlock";
import {observer} from "mobx-react-lite";
import CustomizedCheckbox from "../UI/MyInputCheckBox";
import {FormControlLabel, Typography} from "@mui/material";
import FilterStore from "../../store/filterStore";


const SideBarBlock = observer(() => {

    return (
        <div className={s.sideBarBlock}>
            <div className={s.wrapper}>
                <CountBlock/>
                <AccordionBlock open={true} name={'Бренд'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedBrand().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox data-name={'brand'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <AccordionBlock open={true} name={'Модель'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedModel().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox data-name={'model'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>
                <AccordionBlock open={true} name={'Год'}>
                    <div className={s.accordContainer}>
                        {
                            FilterStore.getStartedYear().map((el) =>
                                <FormControlLabel
                                    key={el}
                                    control={<CustomizedCheckbox data-name={'year'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
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
                                    control={<CustomizedCheckbox data-name={'transmission_type'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
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
                                    control={<CustomizedCheckbox data-name={'drive_type_id'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
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
                                    control={<CustomizedCheckbox data-name={'body'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
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
                                    control={<CustomizedCheckbox data-name={'location'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
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
                                    control={<CustomizedCheckbox data-name={'color'} name={el}/>}
                                    label={<Typography>{el}</Typography>}
                                />
                            )
                        }
                    </div>
                </AccordionBlock>

                {/*<AccordionBlock*/}
                {/*    open={true}*/}
                {/*    name={'Бренд'}*/}

                {/*>*/}
                {/*    <GroupCheckBox*/}
                {/*        inputName={'brand'}*/}
                {/*        data={[{category: '1', disabled: false, name: '1'}]}*/}
                {/*    />*/}
                {/*</AccordionBlock>*/}


                {/*<AccordionBlock open={true} name={'price'}*/}
                {/*                id={'price'}>*/}

                {/*    <RangeSlider/>*/}
                {/*</AccordionBlock>*/}


                <ResetFilterBlock/>
            </div>
        </div>
    );
});

export default SideBarBlock;