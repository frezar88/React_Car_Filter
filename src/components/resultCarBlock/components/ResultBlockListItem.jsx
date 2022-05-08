import React from 'react';
import s from './ResultBlockListItem.module.scss'
import iconSeats from '../../../images/seact_icon.png'
import priceIcon from '../../../images/price_icon.png'
import locationIcon from '../../../images/location.png'
import MyButton from "../../UI/MyButton";
import Tooltip from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";
import {tooltipClasses, Zoom} from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: '170px',
        textAlign:'center',
        lineHeight:'12px',
        fontFamily:'Fonts',
        padding:10,
    },
});

const ResultBlockListItem = ({
                                 body,
                                 car_id,
                                 color,
                                 complectation,
                                 drive_type_id,
                                 engine,
                                 fueltype,
                                 image,
                                 location,
                                 model,
                                 power,
                                 price,
                                 price2,
                                 seat_count,
                                 transmission_type,
                                 years,
                                 promo,
                             }) => {

    return (
        <div className={s.resultBlockListItem} data-car-id={car_id} data-model={model}
             data-complectation={complectation} data-years={years}
             data-engine={engine} data-power={power} data-fueltype={fueltype}
             data-drive_type_id={drive_type_id}
             data-transmission_type={transmission_type} data-price={price} data-location={location}
        >
            <div className={s.img}>
                <img src={'https://stock.mitsubishi.by/' + image} alt="car"/>
                {
                    promo[0]
                        ?
                        <div style={{
                            position: "absolute",
                            left: 0, top: 0,
                            display: "grid",
                            gridTemplateColumns: '1fr 1fr',
                            maxWidth: 69,
                            gap: 5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {
                                promo.map(({promo_name, promo_img, promo_desk}) =>
                                    <>
                                        <CustomTooltip enterTouchDelay={0} TransitionComponent={Zoom} style={{maxWidth:20}} arrow title={promo_desk} placement="top">
                                            <img style={{
                                                width: '100%',
                                                cursor: 'pointer'
                                            }} src={'https://stock.mitsubishi.by/' + promo_img} alt={promo_name}/>
                                        </CustomTooltip>

                                    </>
                                )
                            }
                        </div>
                        : ''
                }
                {/*<img src={image} alt="car"/>*/}
            </div>
            <div className={s.wrapper}>
                <div className={s.carName}>
                    <div>
                        <p>{model}</p>
                        <p>{complectation}</p>
                    </div>
                    <div>
                        <p>{years}г.</p>
                        <p>В наличии</p>
                    </div>
                </div>
                <div className={s.countOptions}>
                    <p>Количество опций: <span>35</span></p>
                </div>
                <div className={s.features}>
                    <ul>
                        <li>
                            <div>
                                <p>{engine}л</p>
                                <p>{power}л.с</p>
                                <p>{fueltype}</p>
                            </div>

                        </li>
                        <li>
                            <div>
                                <p>{transmission_type}</p>
                            </div>

                        </li>
                        <li>
                            <div>
                                <p>{drive_type_id}</p>
                            </div>

                        </li>
                        <li>
                            <img src={iconSeats} alt="seats"/>
                            <div>
                                <p>{body}</p>
                                <p> {seat_count} мест</p>
                            </div>

                        </li>
                    </ul>
                </div>
                <div className={s.priceBlock}>
                    <p><span>{price.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")}</span> <span> BYN</span></p>
                    <div>
                        {
                            price2
                                ? <p>
                                    <span>{price2.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")}</span>
                                    <span>{price2 ? 'BYN' : ''}</span>
                                </p>
                                : ''
                        }
                        <img src={priceIcon} alt="ico"/>
                    </div>

                </div>
                <div className={s.location}>
                    <img src={locationIcon} alt="icon"/>
                    <p>{location}</p>
                </div>
                <div className={s.btnMore}>
                    <MyButton>Запросить предложение</MyButton>

                </div>
            </div>


        </div>);
};

export default ResultBlockListItem;