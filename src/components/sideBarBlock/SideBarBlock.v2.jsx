import React from 'react';
import s from './SideBarBlock.module.scss'
import CountBlock from "./components/CountBlock";
import AccordionBlock from "../UI/AccordionBlock";
import GroupCheckBox from "../UI/GroupCheckBox";

import ResetFilterBlock from "./components/ResetFilterBlock";
import RangeSlider from "../UI/MyInputRange";
import MyInputText from "../UI/MyInputText";

import FilterStore from '../../store/filterStore'


const SideBarBlock = () => {


    return (
        <div className={s.sideBarBlock}>
            <div className={s.wrapper}>
                <CountBlock/>
                <form onChange={(e) => console.log(e.target)}>
                    <AccordionBlock open={true} name={'Модель'} id={'model'}>
                        <GroupCheckBox/>
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Комплектация'} id={'completeSet'}>
                        {
                            ['ASX', 'Eclipse Cross', 'Новый Pajero Sport', 'Обновлённый Outlander'].map((title) =>
                                <GroupCheckBox key={title} title={title}/>
                            )
                        }
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Год'} id={'year'}>
                        <GroupCheckBox
                            data={[{id: 1, name: '2020', disabled: false},
                                {id: 2, name: '2022', disabled: false},]}/>
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Цена'} id={'price'}>
                        <div className={s.priceContainer} style={{}}>
                            <MyInputText  value={1} name={'Минимальная цена'}/>
                            <MyInputText  value={30} name={'Максимальная цена'}/>
                        </div>
                        <RangeSlider/>
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Двигатель'} id={'engine'}>
                        {
                            [
                                {type: 'БЕНЗИНОВЫЙ', data: [{id: 1, name: '1.6', disabled: false}]},
                                {type: 'ДИЗЕЛЬНЫЙ', data: [{id: 1, name: '2.6', disabled: false}]}
                            ].map(({type, data}) =>
                                <GroupCheckBox key={type} title={type} data={data}/>
                            )
                        }
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Привод'} id={'drive'}>
                        <GroupCheckBox data={[{id: 1, name: 'передний', disabled: false},
                            {id: 2, name: 'полный (4WD)', disabled: false}]}/>
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Кузов'} id={'body'}>
                        <GroupCheckBox data={[{id: 1, name: 'внедорожник', disabled: false},
                            {id: 2, name: 'кроссовер', disabled: false}]}/>
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Дилер'} id={'dealer'}>
                        <GroupCheckBox data={[
                            {id: 1, name: 'Бобруйск, пр-т Георгиевский, 3', disabled: false},
                            {id: 2, name: 'Гомель, пр-т Космонавтов, 116', disabled: false},
                            {id: 3, name: 'Минск, пр-т Дзержинского, 134', disabled: false},
                            {id: 4, name: 'Могилёв, пр-т Шмидта, 1а', disabled: false},]}/>
                    </AccordionBlock>
                    <AccordionBlock open={true} name={'Цвет'} id={'color'}>
                        <GroupCheckBox data={[
                            {id: 1, name: 'белый', disabled: false},
                            {id: 2, name: 'тёмно-серый', disabled: false},
                            {id: 3, name: 'чёрный', disabled: false}]}/>
                    </AccordionBlock>
                </form>
                <ResetFilterBlock/>
            </div>
        </div>
    );
};

export default SideBarBlock;