import React from 'react';
import AccordionBlock from "../../../UI/AccordionBlock";
import GroupCheckBox from "../../../UI/GroupCheckBox";
import s from "../../../sideBarBlock/SideBarBlock.module.scss";
import MyInputText from "../../../UI/MyInputText";
import RangeSlider from "../../../UI/MyInputRange";
import FilterStore from "../../../../store/filterStore";
import {observer} from "mobx-react-lite";

const MobileContentMenu = observer(() => {
    return (
        <div>
            <form onChange={(e) => console.log(e.target)}>
                {
                    FilterStore.modelFilter.length
                        ?
                        <AccordionBlock open={true} name={FilterStore.modelFilter[0].name} id={FilterStore.modelFilter[0].id}>
                            {
                                FilterStore.modelFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.modelFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }

                {
                    FilterStore.modelFilter.length
                        ? <AccordionBlock open={true} name={'Комплектация'} id={'completeSet'}>
                            {
                                FilterStore.modelFilter['0']['options'].map(({category, options}) =>
                                    <GroupCheckBox key={category} title={category} data={options}/>
                                )
                            }
                        </AccordionBlock>
                        : false
                }
                {
                    FilterStore.yearFilter.length
                        ? <AccordionBlock open={true} name={FilterStore.modelFilter[0].name} id={FilterStore.modelFilter[0].id}>
                            {
                                FilterStore.modelFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.yearFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }
                {
                    FilterStore.priceFilter.length
                        ? <AccordionBlock open={true} name={FilterStore.priceFilter[0].name} id={FilterStore.priceFilter[0].id}>
                            <div className={s.priceContainer} style={{}}>
                                <MyInputText value={FilterStore.CurrentPrice.length ?FilterStore.CurrentPrice[0]: FilterStore.priceFilter[0]['options'].min} name={'Минимальная цена'}/>
                                <MyInputText value={FilterStore.CurrentPrice.length ? FilterStore.CurrentPrice[1]: FilterStore.priceFilter[0]['options'].max} name={'Максимальная цена'}/>
                            </div>
                            <RangeSlider/>
                        </AccordionBlock>
                        :
                        false
                }

                {
                    FilterStore.engineFilter.length
                        ? <AccordionBlock open={true} name={FilterStore.engineFilter[0].name} id={FilterStore.engineFilter[0].id}>
                            {
                                FilterStore.engineFilter['0']['options'].map(({category, options}) =>
                                    <GroupCheckBox key={category} title={category} data={options}/>
                                )
                            }
                        </AccordionBlock>
                        : false
                }

                {
                    FilterStore.transmissionFilter.length
                        ?
                        <AccordionBlock open={true} name={FilterStore.transmissionFilter[0].name} id={FilterStore.transmissionFilter[0].id}>
                            {
                                FilterStore.transmissionFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.transmissionFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }

                {
                    FilterStore.driveFilter.length
                        ?
                        <AccordionBlock open={true} name={FilterStore.driveFilter[0].name} id={FilterStore.driveFilter[0].id}>
                            {
                                FilterStore.driveFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.driveFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }
                {
                    FilterStore.bodyFilter.length
                        ?
                        <AccordionBlock open={true} name={FilterStore.bodyFilter[0].name} id={FilterStore.bodyFilter[0].id}>
                            {
                                FilterStore.bodyFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.bodyFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }
                {
                    FilterStore.locationsFilter.length
                        ?
                        <AccordionBlock open={true} name={FilterStore.locationsFilter[0].name} id={FilterStore.locationsFilter[0].id}>
                            {
                                FilterStore.bodyFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.locationsFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }
                {
                    FilterStore.colorFilter.length
                        ?
                        <AccordionBlock open={true} name={FilterStore.colorFilter[0].name} id={FilterStore.colorFilter[0].id}>
                            {
                                FilterStore.bodyFilter[0]['options'].length
                                    ? <GroupCheckBox data={FilterStore.colorFilter[0]['options']}/>
                                    : false
                            }
                        </AccordionBlock>
                        :
                        false
                }
            </form>
        </div>
    );
});

export default MobileContentMenu;