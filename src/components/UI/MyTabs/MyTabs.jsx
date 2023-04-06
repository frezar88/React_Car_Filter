import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import s from './MyTabs.module.scss'
import {styled} from "@mui/material";
import {PRIMARY_BLACK, PRIMARY_COLOR} from "../../../const";
import MyAccordion from "../MyAccordion/MyAccordion";
import CarInfoStore from "../../../store/CarInfoStore";
import MyAccordionBaseOptions from "../MyAccordion/MyAccordionBaseOptions";

const MyTabList = styled(TabList)({
    '.MuiTabs-indicator': {
        background: PRIMARY_COLOR,
        display:'none'
    },
    '.MuiTabs-flexContainer':{
        overflow: 'auto'
    },
    '.MuiTabs-flexContainer::-webkit-scrollbar':{
        width: '5px !important',
        height: '5px',
    },



});


const MyCustomTab = styled(Tab)({
    fontSize: 15,
    width: 'unset',
    fontWeight: 'bold',
    fontFamily: 'Fonts',
    '&.Mui-selected': {
        color: PRIMARY_BLACK
    }
});


const MyTabs = () => {
    const [value, setValue] = React.useState(CarInfoStore.getCarInfo()['best_option_package']['opt'][0]['options'].length ? '3' : '2');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(CarInfoStore.getCarInfo()['best_option_package']['opt'][0]['options'])
    return (
        <div style={{marginTop: '30px'}}>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value} >
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <MyTabList onChange={handleChange} aria-label="lab API tabs example">
                            <MyCustomTab
                                style={{pointerEvents: CarInfoStore.getCarInfo()['best_option_package']['opt'][0]['options'].length ? 'all' : 'none',
                                    color:!CarInfoStore.getCarInfo()['options_package']['opt'].length ? 'gray':''}}
                                className={s.menu_button} label="Ключевые опции" value="3"/>
                            <MyCustomTab className={s.menu_button} label="Технические характеристики" value="2"/>
                            <MyCustomTab
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                style={{pointerEvents: CarInfoStore.getCarInfo()['options_package']['opt'].length ? 'all' : 'none',
                               color:!CarInfoStore.getCarInfo()['options_package']['opt'].length ? 'gray':''}}
                                className={s.menu_button} label="Комплектация" value="1"/>
                        </MyTabList>
                    </Box>
                    <TabPanel style={{padding: '5px 0'}} value="1">
                        <ul className={s.list}>
                            {
                                CarInfoStore.getCarInfo()['options_package']['opt'].map((el, index) =>
                                    <MyAccordionBaseOptions key={index} name={el['options_package']} value={el['options']}/>

                                )
                            }
                        </ul>
                    </TabPanel>
                    <TabPanel style={{padding: 0}} value="2">
                        {
                            CarInfoStore.getModificationData().map((el, index) =>
                                <MyAccordion key={index} name={el['category']} value={el['category_options']}/>
                            )
                        }
                    </TabPanel>
                    <TabPanel style={{padding: 0}} value="3">
                        <ul  className={s.list}>


                        {
                            CarInfoStore.getCarInfo()['best_option_package']['opt'][0]['options'].map((el,index)=>
                                <li style={{
                                    fontFamily: 'Fonts',
                                    width: '100%',
                                    display:el['value'] ? 'flex':'flex'
                                }} key={index}>
                                        <span style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            gap: '5px'
                                        }}>
                                            <span className={s.li_text} style={{background: '#fff',whiteSpace:"nowrap"}}>{el['Опция']}</span>
                                            <span style={{
                                                width: '100%',
                                                // borderBottom: 'dashed 1px #80808059',
                                                transform: 'translateY(-7px)'
                                            }}></span>
                                            {/*<span className={s.li_text} style={{whiteSpace:'nowrap'}}>{el.value}</span>*/}
                                        </span>
                                </li>
                            )
                        }
                        </ul>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default MyTabs;