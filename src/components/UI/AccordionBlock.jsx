import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import s from './AccordionBlock.module.scss'

const AccordionBlock = ({children,name,id,open,...props}) => {
    return (
        <Accordion {...props}  defaultExpanded={open} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize={'medium'} className={s.arrowAccord}  />}
                aria-controls={`${id}-content`}
                id={id}
            >
                <Typography className={s.accordName}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component={'div'}>
                    {children}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionBlock;