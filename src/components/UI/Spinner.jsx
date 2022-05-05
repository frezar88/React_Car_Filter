import React from 'react';
import {Box, CircularProgress} from "@mui/material";
import s from "./Spinner.module.scss";

const Spinner = () => {
    return (
        <Box className={s.spinner}>
            <CircularProgress size={120} className={s.spinnerItem}/>
        </Box>
    );
};

export default Spinner;