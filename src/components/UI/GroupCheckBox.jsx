import React from 'react';
import {FormControlLabel, FormGroup, Typography} from "@mui/material";
import CustomizedCheckbox from "./MyInputCheckBox";
import s from './GroupCheckBox.module.scss'
import {observer} from "mobx-react-lite";

const GroupCheckBox = observer(({title, data, inputName, ...props}) => {

    return (

        <FormGroup>
            {title
                ? <h2 className={s.h2}>{title}</h2>
                : false
            }
            {
                data.map(({category, disabled, name}) =>
                    <FormControlLabel key={name ? name : category} className={s.label} disabled={disabled}
                                      control={<CustomizedCheckbox {...props} data-name={!title? name?name:category : `${title}*${name}`} name={inputName}/>}
                                      label={<Typography
                                          className={disabled ? [s.label, s.disabled].join(' ') : s.label}>{name ? name : category}</Typography>}/>
                )
            }
        </FormGroup>
    );
});

export default GroupCheckBox;