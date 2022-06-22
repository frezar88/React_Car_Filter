import React from 'react';
import {Button, styled} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import s from './MyButton.module.scss'

const MyCustomButton = styled(Button)({
    color: 'white',
    padding:0,
    width:'unset',
    display:'block',
    background:'unset',
    minWidth:'unset',
    fontFamily:'Fonts',
    '&:hover':{
        background:'unset'
    },
});

const MyButton = ({children,arrow, ...props}) => {
    return (
        <div className={s.wrapper}>
            {arrow ? <ArrowBackIosIcon className={s.button_icon}/> : ''}
            <MyCustomButton {...props} variant="text">{children}</MyCustomButton>
        </div>

    );
};

export default MyButton;