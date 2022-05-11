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
                    <div className={s.accordContainer} >
                    {
                        FilterStore.getStartedBrands().map((el) =>
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
                    <div className={s.accordContainer} >
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