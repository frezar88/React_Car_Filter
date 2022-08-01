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

const MyTabList = styled(TabList)({
    '.MuiTabs-indicator': {
        background: PRIMARY_COLOR
    }
});

const MyCustomTab = styled(Tab)({
    fontSize:15,
    width: 'unset',
    fontWeight: 'bold',
    fontFamily: 'Fonts',
    '&.Mui-selected': {
        color: PRIMARY_BLACK
    }
});


const MyTabs = () => {
    const [value, setValue] = React.useState(CarInfoStore.getCarInfo()['base_options'].length ? '1' : '2');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{marginTop:'30px'}}>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <MyTabList   onChange={handleChange} aria-label="lab API tabs example">
                            {/*<MyCustomTab*/}
                            {/*    variant="scrollable"*/}
                            {/*    scrollButtons="auto"*/}
                            {/*    aria-label="scrollable auto tabs example"*/}
                            {/*    style={{pointerEvents: CarInfoStore.getCarInfo()['base_options'].length ? 'all' : 'none',*/}
                            {/*   color:!CarInfoStore.getCarInfo()['base_options'].length ? 'gray':''}}*/}
                            {/*    className={s.menu_button} label="Ключевые опции" value="1"/>*/}
                            <MyCustomTab className={s.menu_button} label="Технические характеристики" value="2"/>
                        </MyTabList>
                    </Box>
                    {/*<TabPanel style={{padding: '5px 0'}} value="1">*/}
                    {/*    <ul className={s.list}>*/}
                    {/*        {*/}
                    {/*            CarInfoStore.getCarInfo()['base_options'].map(({option_name}, index) =>*/}
                    {/*                <li style={{fontFamily:'Fonts'}} key={index}>{option_name}</li>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    </ul>*/}
                    {/*</TabPanel>*/}
                    <TabPanel style={{padding: 0}} value="2">
                        {
                            CarInfoStore.getModificationData().map((el,index) =>
                                <MyAccordion key={index} name={el['category']} value={el}/>
                            )
                        }
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default MyTabs;