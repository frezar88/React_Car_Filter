import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {PRIMARY_BLACK, PRIMARY_COLOR} from "../../../const";
import s from "../MyTabs/MyTabs.module.scss";
import {observer} from "mobx-react-lite";

const MyExpandMoreIcon = styled(ExpandMoreIcon)({
    color: PRIMARY_COLOR


});

const MyTypography = styled(Typography)({
    color: PRIMARY_BLACK,
    fontFamily: 'Fonts'

});

const MyAccordion = observer(({name, value}) => {
    let arr = []
    for (const key in value) {
        if (key !== 'category') {
            arr.push({key: key, value: value[key]})
        }
    }
    return (
        <Accordion>

            <AccordionSummary
                expandIcon={<MyExpandMoreIcon fontSize={"large"}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={s.summary}
            >
                <MyTypography style={{
                    fontSize: 17,
                    margin:'0 !important',
                    padding: '5px 0',
                }}>{name && name !== 'null' ? name : 'Данные предоставляются по запросу'}
                </MyTypography>
            </AccordionSummary>
            <AccordionDetails>
                <MyTypography component={'div'}>
                    <ul className={s.list}>
                        {
                            arr[0]
                                ?
                                arr.map((el, index) =>
                                    <li style={{
                                        fontFamily: 'Fonts',
                                        width: '100%',
                                        display:el['value'] ? 'flex':'none'
                                    }} key={index}>
                                        <span style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            gap: '5px'
                                        }}>
                                            <span style={{background: '#fff'}}>{el.key}</span> <span style={{
                                            width: '100%',
                                            borderBottom: 'dashed 1px #80808059',
                                            transform: 'translateY(-7px)'
                                        }}></span> <span style={{whiteSpace:'nowrap'}}>{el.value}</span>
                                        </span>
                                    </li>
                                )
                                : ''
                        }


                    </ul>
                </MyTypography>
            </AccordionDetails>
        </Accordion>


    );
});

export default MyAccordion;





