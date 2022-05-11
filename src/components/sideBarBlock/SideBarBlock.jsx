import React from 'react';
import s from './SideBarBlock.module.scss'
import CountBlock from "./components/CountBlock";
import AccordionBlock from "../UI/AccordionBlock";
import GroupCheckBox from "../UI/GroupCheckBox";
import ResetFilterBlock from "./components/ResetFilterBlock";
import {observer} from "mobx-react-lite";


const SideBarBlock = observer(() => {


    const changeForm = () => {


    }


    return (
        <div className={s.sideBarBlock}>
            <div className={s.wrapper}>
                <CountBlock/>
                <form onChange={changeForm}>

                    <AccordionBlock
                        open={true}
                        name={'test'}
                        id={'1'}
                    >
                        <GroupCheckBox
                            inputName={'test'}
                            data={[{category: '1', disabled: false, name: '1'}]}
                        />
                    </AccordionBlock>


                    {/*<AccordionBlock open={true} name={'price'}*/}
                    {/*                id={'price'}>*/}

                    {/*    <RangeSlider/>*/}
                    {/*</AccordionBlock>*/}

                </form>
                <ResetFilterBlock/>
            </div>
        </div>
    );
});

export default SideBarBlock;