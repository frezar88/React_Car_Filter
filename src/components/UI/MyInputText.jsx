import * as React from 'react';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CustomTexField = styled(TextField)({
    '& input': {
        fontSize: '14px',
        userSelect: 'none'
    },
    '& label.Mui-focused': {
        color: '#808080',
    },
    '& label.MuiInputLabel-root': {
        fontFamily: 'Fonts',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#808080',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#808080',
        },
        '&:hover fieldset': {
            borderColor: '#808080',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#808080',
            border: 'solid 1px #808080'
        },
    },
});


const MyInputText = ({name, value,props}) => {
    return (
        <CustomTexField
            {...props}
            size="small"
            fullWidth
            label={name}
            variant="outlined"
            value={value}
            id="validation-outlined-input"
            inputProps={
                {readOnly: true,}
            }
        />

    );
}

export default MyInputText;