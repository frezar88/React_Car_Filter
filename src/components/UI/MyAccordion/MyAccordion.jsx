import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabList from "@mui/lab/TabList";
import {PRIMARY_COLOR} from "../../../const";
import s from "../MyTabs/MyTabs.module.scss";

const MyExpandMoreIcon = styled(ExpandMoreIcon)({

        color: PRIMARY_COLOR

});

const MyAccordion = () => {
    return (
        <Accordion disableSpacing={true}   >
            <AccordionSummary
                expandIcon={<MyExpandMoreIcon fontSize={"large"}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography style={{fontSize:17,padding:'10px 0'}}>Внешний вид</Typography>
            </AccordionSummary>
            <AccordionDetails  >
                <Typography>
                    <ul className={s.list}>
                        <li>Климант контроль</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>


    );
};

export default MyAccordion;