import * as React from 'react';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import {PRIME_COLOR} from "../../const";
import FilterStore from "../../store/filterStore";
import s from "../sideBarBlock/SideBarBlock.module.scss";
import MyInputText from "./MyInputText";
import {observer} from "mobx-react-lite";
import ChangeFormStore from "../../store/changeFormStore";
import ActualStoreFilters from "../../store/actualStoreFilters";

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
    const [value, setValue] = useState([+FilterStore.getStartedPrice().min, +FilterStore.getStartedPrice().max])

    const setPriceValue = () => {

        ChangeFormStore.setChangePrice({...ChangeFormStore.getChangePrice(), min: +value[0], max: +value[1]})


        ActualStoreFilters.takeActualCarList('1')
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setPriceValue()
        }, 500)
        return () => {
            clearTimeout(handler)
        }
    }, [value])


    function handleChange(event, newValue) {
        setValue(newValue)
    };

    return (
        <Box sx={{width: '100%', padding: '0 10px', boxSizing: 'border-box'}}>
            <div className={s.priceContainer} style={{}}>
                <MyInputText
                    value={
                        ActualStoreFilters.getActualPrice().min && ActualStoreFilters.getActualPrice().min !== 0
                            ? Number(ActualStoreFilters.getActualPrice().min)
                            : value[0]
                    }
                    name={'Минимальная цена'}
                    onInput={(e) => setValue(e.target.value)}
                />

                <MyInputText
                    value={
                        ActualStoreFilters.getActualPrice().max && ActualStoreFilters.getActualPrice().max !== 0
                            ? Number(ActualStoreFilters.getActualPrice().max)
                            : value[1]
                    }
                    name={'Максимальная цена'}
                    onInput={(e) => setValue(e.target.value)}
                />
            </div>
            <Sliders
                // disabled={ActualStoreFilters.getActualPrice().min == ActualStoreFilters.getActualPrice().max}
                valueLabelDisplay="off"
                min={
                    ActualStoreFilters.getActualPrice().min && ActualStoreFilters.getActualPrice().min !== 0
                        ? Number(ActualStoreFilters.getActualPrice().min)
                        : Number(FilterStore.getStartedPrice().min)
                }
                max={
                    ActualStoreFilters.getActualPrice().max && ActualStoreFilters.getActualPrice().max !== 0
                        ? Number(ActualStoreFilters.getActualPrice().max)
                        : Number(FilterStore.getStartedPrice().max)
                }

                defaultValue={
                    [
                        ActualStoreFilters.getActualPrice().min && ActualStoreFilters.getActualPrice().min !== 0
                            ? Number(ActualStoreFilters.getActualPrice().min)
                            : Number(FilterStore.getStartedPrice().min),
                        ActualStoreFilters.getActualPrice().max && ActualStoreFilters.getActualPrice().max !== 0
                            ? Number(ActualStoreFilters.getActualPrice().max)
                            : Number(FilterStore.getStartedPrice().max),
                    ]
                }
                onChange={handleChange}
            />
        </Box>
    );
});

export default RangeSlider;