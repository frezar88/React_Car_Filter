import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {PRIMARY_COLOR} from "../../../const";
import s from "../MyTabs/MyTabs.module.scss";

const MyExpandMoreIcon = styled(ExpandMoreIcon)({
        color: PRIMARY_COLOR
});

const MyTypography = styled(Typography)({
    fontFamily:'Fonts'
});

const MyAccordion = ({name,value}) => {
    return (
        <Accordion   >
            <AccordionSummary
                expandIcon={<MyExpandMoreIcon fontSize={"large"}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <MyTypography style={{fontSize:17,padding:'10px 0'}}>{name}</MyTypography>
            </AccordionSummary>
            <AccordionDetails  >
                <MyTypography style={{font:'Fonts'}} component={'div'}>
                    <ul className={s.list}>
                        {
                            value.map((el,index)=>
                                <li key={index}>{el}</li>
                            )
                        }
                    </ul>
                </MyTypography>
            </AccordionDetails>
        </Accordion>


    );
};

export default MyAccordion;