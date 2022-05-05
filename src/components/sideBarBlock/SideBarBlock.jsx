import React from 'react';
import s from './SideBarBlock.module.scss'
import CountBlock from "./components/CountBlock";
import AccordionBlock from "../UI/AccordionBlock";
import GroupCheckBox from "../UI/GroupCheckBox";

import ResetFilterBlock from "./components/ResetFilterBlock";

import FilterStore from '../../store/filterStore'
import {observer} from "mobx-react-lite";
import ResultStore from "../../store/resultStore";
import {debounce} from "../../const";


const SideBarBlock = observer(() => {
    const addModel = (event) => {
        let inputState = event.target.checked
        let obj = {}
        let model = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            obj[model] = []
            FilterStore.setFiltersData({...FilterStore.FiltersData, model: {...FilterStore.FiltersData.model, ...obj}})
            FilterStore.setCompleteSet([...FilterStore.CompleteSet, model])
        } else {
            let tempObj = {...FilterStore.FiltersData}
            delete tempObj.model[model]
            FilterStore.setFiltersData({...tempObj})
            FilterStore.setCompleteSet([...FilterStore.CompleteSet].filter(item => item !== model))
        }
    }

    const addYear = (event) => {
        let inputState = event.target.checked
        let array = []
        let year = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            array.push(year)
            FilterStore.setFiltersData({...FilterStore.FiltersData, year: [...FilterStore.FiltersData.year, ...array],})
        } else {
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                year: [...FilterStore.FiltersData.year.filter(item => item !== year)],
            })
        }
    }
    const addTransmission = (event) => {
        let inputState = event.target.checked
        let array = []
        let transmission = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            array.push(transmission)
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                transmission: [...FilterStore.FiltersData.transmission, ...array],
            })

        } else {
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                transmission: [...FilterStore.FiltersData.transmission.filter(item => item !== transmission)],
            })

        }
    }
    const addDrive = (event) => {
        let inputState = event.target.checked
        let array = []
        let drive = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            array.push(drive)
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                drive: [...FilterStore.FiltersData.drive, ...array],
            })
        } else {
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                drive: [...FilterStore.FiltersData.drive.filter(item => item !== drive)],
            })

        }
    }
    const addBody = (event) => {
        let inputState = event.target.checked
        let array = []
        let body = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            array.push(body)
            FilterStore.setFiltersData({...FilterStore.FiltersData, body: [...FilterStore.FiltersData.body, ...array],})
        } else {
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                body: [...FilterStore.FiltersData.body.filter(item => item !== body)],
            })
        }
    }

    const addLocation = (event) => {
        let inputState = event.target.checked
        let array = []
        let location = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            array.push(location)
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                location: [...FilterStore.FiltersData.location, ...array],
            })
        } else {
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                location: [...FilterStore.FiltersData.location.filter(item => item !== location)],
            })
        }
    }

    const addColor = (event) => {
        let inputState = event.target.checked
        let array = []
        let color = event.target.parentNode.attributes['data-name'].value
        if (inputState) {
            array.push(color)
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                color: [...FilterStore.FiltersData.color, ...array],
            })
        } else {
            FilterStore.setFiltersData({
                ...FilterStore.FiltersData,
                color: [...FilterStore.FiltersData.color.filter(item => item !== color)],
            })
        }
    }

    const addEngine = (event) => {
        let inputState = event.target.checked
        let engine = event.target.parentNode.attributes['data-name'].value
        let engineArray = engine.split('*')
        let typeFuel = engineArray[0]
        let engineValue = engineArray[1]
        if (inputState) {
            let tempObj = {...FilterStore.FiltersData.engine,}
            if (Array.isArray(tempObj[typeFuel])) {
                tempObj[typeFuel].push(engineValue)
            } else {
                tempObj[typeFuel] = [engineValue]
                FilterStore.setFiltersData({...FilterStore.FiltersData, engine: {...tempObj}})
            }
        } else {
            let tempObj = {...FilterStore.FiltersData.engine,}
            tempObj[typeFuel] = tempObj[typeFuel].filter(item => item !== engineValue)
            if (!tempObj[typeFuel].length) {
                delete tempObj[typeFuel]
                FilterStore.setFiltersData({...FilterStore.FiltersData, engine: {...tempObj}})
            } else {
                FilterStore.setFiltersData({...FilterStore.FiltersData, engine: {...tempObj}})
            }
        }
    }

    const addCompleteSet = (event) => {
        let inputState = event.target.checked
        let completeSet = event.target.parentNode.attributes['data-name'].value
        let completeArray = completeSet.split('*')
        let carModel = completeArray[0]
        let completeValue = completeArray[1]
        if (inputState) {
            let tempObj = {...FilterStore.FiltersData.model}
            tempObj[carModel].push(completeValue)
            FilterStore.setFiltersData({...FilterStore.FiltersData, model: {...tempObj}})
            console.log(tempObj[carModel])
        } else {
            let tempObj = {...FilterStore.FiltersData.model}
            tempObj[carModel] = tempObj[carModel].filter(item => item !== completeValue)
            FilterStore.setFiltersData({...FilterStore.FiltersData, model: {...tempObj}})
        }
    }

    const changeForm = () => {
        FilterStore.getStartedFilters()
        ResultStore.getStartedCars()
    }

    let debounceOnChangeForm = debounce(changeForm, 500);

    return (
        <div className={s.sideBarBlock}>
            <div className={s.wrapper}>
                <CountBlock/>
                <form onChange={debounceOnChangeForm}>
                    {
                        FilterStore.modelFilter.length
                            ?
                            <AccordionBlock open={true} name={FilterStore.modelFilter[0].name}
                                            id={FilterStore.modelFilter[0].id}>
                                {
                                    FilterStore.modelFilter[0]['options'].length
                                        ? <GroupCheckBox onClick={addModel} inputName={FilterStore.modelFilter[0].id}
                                                         data={FilterStore.modelFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                    {
                        FilterStore.modelFilter.length && FilterStore.CompleteSet.length
                            ? <AccordionBlock open={true} name={'Комплектация'} id={'completeSet'}>
                                {
                                    FilterStore.modelFilter['0']['options']
                                        .filter(item => FilterStore.CompleteSet.find(item2 => item2 === item.category))
                                        .map(({category, options}) =>
                                            <GroupCheckBox onClick={addCompleteSet} key={category}
                                                           inputName={FilterStore.modelFilter[0].id}
                                                           title={category} data={options}/>
                                        )
                                }
                            </AccordionBlock>
                            : false
                    }
                    {
                        FilterStore.yearFilter.length
                            ? <AccordionBlock open={true} name={FilterStore.yearFilter[0].name}
                                              id={FilterStore.modelFilter[0].id}>
                                {
                                    FilterStore.modelFilter[0]['options'].length
                                        ? <GroupCheckBox onClick={addYear} data={FilterStore.yearFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                    {/*{*/}
                    {/*    FilterStore.priceFilter.length*/}
                    {/*        ? <AccordionBlock open={true} name={FilterStore.priceFilter[0].name} id={FilterStore.priceFilter[0].id}>*/}

                    {/*            <RangeSlider/>*/}
                    {/*        </AccordionBlock>*/}
                    {/*        :*/}
                    {/*        false*/}
                    {/*}*/}
                    {
                        FilterStore.engineFilter.length
                            ? <AccordionBlock open={true} name={FilterStore.engineFilter[0].name}
                                              id={FilterStore.engineFilter[0].id}>
                                {
                                    FilterStore.engineFilter['0']['options'].map(({category, options}) =>
                                        <GroupCheckBox onClick={addEngine} key={category} title={category} data={options}/>
                                    )
                                }
                            </AccordionBlock>
                            : false
                    }
                    {
                        FilterStore.transmissionFilter.length
                            ?
                            <AccordionBlock open={true} name={FilterStore.transmissionFilter[0].name}
                                            id={FilterStore.transmissionFilter[0].id}>
                                {
                                    FilterStore.transmissionFilter[0]['options'].length
                                        ? <GroupCheckBox onClick={addTransmission}
                                                         data={FilterStore.transmissionFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                    {
                        FilterStore.driveFilter.length
                            ?
                            <AccordionBlock open={true} name={FilterStore.driveFilter[0].name}
                                            id={FilterStore.driveFilter[0].id}>
                                {
                                    FilterStore.driveFilter[0]['options'].length
                                        ?
                                        <GroupCheckBox onClick={addDrive} data={FilterStore.driveFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                    {
                        FilterStore.bodyFilter.length
                            ?
                            <AccordionBlock open={true} name={FilterStore.bodyFilter[0].name}
                                            id={FilterStore.bodyFilter[0].id}>
                                {
                                    FilterStore.bodyFilter[0]['options'].length
                                        ? <GroupCheckBox onClick={addBody} data={FilterStore.bodyFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                    {
                        FilterStore.locationsFilter.length
                            ?
                            <AccordionBlock open={true} name={FilterStore.locationsFilter[0].name}
                                            id={FilterStore.locationsFilter[0].id}>
                                {
                                    FilterStore.bodyFilter[0]['options'].length
                                        ? <GroupCheckBox onClick={addLocation}
                                                         data={FilterStore.locationsFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                    {
                        FilterStore.colorFilter.length
                            ?
                            <AccordionBlock open={true} name={FilterStore.colorFilter[0].name}
                                            id={FilterStore.colorFilter[0].id}>
                                {
                                    FilterStore.bodyFilter[0]['options'].length
                                        ?
                                        <GroupCheckBox onClick={addColor} data={FilterStore.colorFilter[0]['options']}/>
                                        : false
                                }
                            </AccordionBlock>
                            :
                            false
                    }
                </form>
                <ResetFilterBlock/>
            </div>
        </div>
    );
});

export default SideBarBlock;