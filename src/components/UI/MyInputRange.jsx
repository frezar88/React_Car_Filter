import * as React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import {debounce, PRIME_COLOR} from "../../const";
import FilterStore from "../../store/filterStore";
import {useState} from "react";
import s from "../sideBarBlock/SideBarBlock.module.scss";
import MyInputText from "./MyInputText";
import {observer} from "mobx-react-lite";
import ResultStore from "../../store/resultStore";

function ValueLabelComponent(props) {
    const {children, value} = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
};


const Sliders = styled(Slider)(({theme}) => ({
    color: PRIME_COLOR,
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        padding: 10,
        backgroundColor: 'currentColor',
        border: '1px solid currentColor',
        boxShadow: 'none',
        borderRadius: 1,
        '&:hover': {
            boxShadow: 'none',
        },
        '&.Mui-active': {
            boxShadow: 'none',
        },
        '&:before': {
            display: 'none'
        },
        '&:after': {
            display: 'none'
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .Mui-focusVisible': {
        boxShadow: 'none !important',
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
}));


const RangeSlider = observer(() => {
    const [value, setValue] = useState([0, 0])

    function handleChange(event, newValue) {
        setValue(newValue)
        ResultStore.setPriceFilter(newValue)
    };
    return (
        <Box sx={{width: '100%', padding: '0 10px', boxSizing: 'border-box'}}>
            <div className={s.priceContainer} style={{}}>
                <MyInputText
                    value={value[0] ? String(value[0]).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") : FilterStore.priceFilter[0]['options'].min ? FilterStore.priceFilter[0]['options'].min.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") : FilterStore.priceFilter[0]['options'].min}
                    name={'Минимальная цена'}/>
                <MyInputText
                    value={value[1] ? String(value[1]).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") : FilterStore.priceFilter[0]['options'].max ? FilterStore.priceFilter[0]['options'].min.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") : FilterStore.priceFilter[0]['options'].min}
                    name={'Максимальная цена'}/>
            </div>
            <Sliders
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                min={Number(FilterStore.priceFilter[0]['options'].min)}
                max={Number(FilterStore.priceFilter[0]['options'].max)}
                defaultValue={[Number(FilterStore.priceFilter[0]['options'].min), Number(FilterStore.priceFilter[0]['options'].max)]}
                onChange={handleChange}
            />
        </Box>
    );
});

export default RangeSlider;