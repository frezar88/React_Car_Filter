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

const MyTabList = styled(TabList)({
    '.MuiTabs-indicator': {
        background: PRIMARY_COLOR
    }
});

const MyCustomTab = styled(Tab)({
    width: 'unset',
    fontWeight: 'bold',
    fontFamily: 'Fonts',
    '&.Mui-selected': {
        color: PRIMARY_BLACK
    }
});


const MyTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <MyTabList onChange={handleChange} aria-label="lab API tabs example">
                            <MyCustomTab className={s.menu_button} label="Ключевые опции" value="1"/>
                            <MyCustomTab className={s.menu_button} label="Полная комплектация" value="2"/>
                            {/*<MyCustomTab className={s.menu_button} label="Характеристики" value="3" />*/}
                            {/*<MyCustomTab className={s.menu_button} label="Аксессуары" value="4" />*/}
                        </MyTabList>
                    </Box>
                    <TabPanel style={{padding:'5px 0'}} value="1">
                        <ul className={s.list}>
                            <li>Климант контроль</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </TabPanel>
                    <TabPanel style={{padding:0}} value="2">
                        <MyAccordion/>
                        <MyAccordion/>
                    </TabPanel>
                    {/*<TabPanel value="3">Item Three</TabPanel>*/}
                    {/*<TabPanel value="4">111</TabPanel>*/}
                </TabContext>
            </Box>
        </div>
    );
};

export default MyTabs;