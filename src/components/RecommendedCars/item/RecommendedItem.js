import React, {useState} from 'react';
import s from './RecommendedItem.module.scss'
import iconSeats from '../../../images/seact_icon.png'
import priceIcon from '../../../images/price_icon.png'
import locationIcon from '../../../images/location.png'
import Tooltip from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";
import {tooltipClasses, Zoom} from "@mui/material";
import reservedImg from '../../../images/zarezervirovan_1.svg'
import no_img from '../../../images/no_photo.png'

const CustomTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: '170px',
        textAlign: 'center',
        lineHeight: '12px',
        fontFamily: 'Fonts',
        padding: 10,
    },
});

const RecommendedItem = ({
                             brand,
                             regionPrice,
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
                             ru_price,
                             seat_count,
                             transmission_type,
                             years,
                             promo,
                             vin,
                             modification,
                             reserved,
                             equipment,
                             facelifting,
                             uid,
                             generation,
                             ...props
                         }) => {
    const [imgError, setImgError] = useState(false)


    const imgPath = JSON.parse(image)?.img.filter((item) => item.category === 'Внешний вид' && item['main_photo'] === true)[0]?.path

    // const setDataForModal = () => {
    //
    //     const modal = document.querySelector('.modal-car ')
    //     const html = document.querySelector('body')
    //     const btnSendModel = document.querySelector('.modal-car .modal-car__content .modal-form-send')
    //     btnSendModel.setAttribute('model', model)
    //     btnSendModel.setAttribute('complectation', complectation)
    //     btnSendModel.setAttribute('years', years)
    //     btnSendModel.setAttribute('engine', engine)
    //     btnSendModel.setAttribute('power', power)
    //     btnSendModel.setAttribute('fueltype', fueltype)
    //     btnSendModel.setAttribute('drive_type_id', drive_type_id)
    //     btnSendModel.setAttribute('transmission_type', transmission_type)
    //     btnSendModel.setAttribute('price', price)
    //     btnSendModel.setAttribute('location', location)
    //     btnSendModel.setAttribute('vin', vin)
    //     if (promo.length) {
    //         let arrPromo = []
    //         promo.forEach(({promo_name}) => {
    //             arrPromo.push(promo_name)
    //         })
    //         btnSendModel.setAttribute('promo', arrPromo.join(' '))
    //     } else {
    //         btnSendModel.removeAttribute('promo')
    //     }
    //     html.style.overflow = 'hidden'
    //     modal.classList.add('active')
    //
    //     let content = document.querySelector('.modal-car__content')
    //     let contentSuccess = document.querySelector('.modal-car__content-success')
    //     contentSuccess['style'].display = 'none'
    //
    //     content['style'].display = 'block'
    //
    // }

    return (
        <div {...props}
             className={reserved === '0' ? [s.resultBlockListItem].join(' ') : [s.resultBlockListItem, s.disabled].join(' ')}
             data-car-id={car_id}
             data-model={model}
             data-complectation={complectation} data-years={years}
             data-engine={engine} data-power={power} data-fueltype={fueltype}
             data-drive_type_id={drive_type_id}
             data-transmission_type={transmission_type} data-price={price} data-location={location}
             onClick={(e) => {
                 let dataStop = e.target['attributes']['data-stop']
                 if (dataStop) {
                     e.preventDefault()
                 } else {
                     window.location.href = `car-card?uid=${uid}`
                 }
             }}
        >

            <div style={{position: 'relative'}} className={s.img}>
                {/*<img data-att={'link_img'} src={'https://stock.mitsubishi.by/' + image} alt="car"/>*/}
                {/*<img data-att={'link_img'} src={image} alt="car"/>*/}
                {/*<b style={{position: 'absolute', top: 0}}>{vin}</b>*/}
                <img
                    style={{width: '100%',}}
                    onError={(e) => {
                        if (e.type === 'error') {
                            setImgError(true)
                        }
                    }}
                    src={imgError ? no_img : 'https://stock.aps.by/' + imgPath} alt="#"
                    data-att={'link_img'}/>


                {reserved === '1'
                    ? <img style={{position: "absolute", left: 0, width: '100%', zIndex: 1111111}} src={reservedImg}
                           alt="reserved"/>
                    : false
                }

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

                        }}
                             data-stop={'stop'}
                        >
                            {
                                promo.map(({promo_name, promo_img, promo_desk}) =>
                                    < div key={promo_name}>
                                        {
                                            promo_img && promo_img !== ' '
                                                ? <CustomTooltip
                                                    key={promo_name}
                                                    enterTouchDelay={0}
                                                    TransitionComponent={Zoom}
                                                    style={{maxWidth: 20}}
                                                    arrow title={promo_desk}
                                                    placement="top"
                                                >
                                                    <img data-stop={'stop'} style={{
                                                        width: '100%',
                                                        cursor: 'pointer'
                                                    }}
                                                        // src={'https://stock.mitsubishi.by/' + promo_img} alt={promo_name}
                                                         src={promo_img} alt={promo_name}
                                                    />

                                                </CustomTooltip>
                                                : ''
                                        }
                                    </div>
                                )
                            }
                        </div>
                        : ''
                }
                {/*<img src={image} alt="car"/>*/}
            </div>
            <div className={s.wrapper}>
                <div
                    className={s.carName}>
                    <div
                        className={s.car_name}>
                        <p>{brand} {model} {modification ? modification : ''}</p>
                        <p>{complectation}</p>
                    </div>
                    <div>
                        <p>{years}г.</p>
                        <p>В наличии</p>
                    </div>
                </div>
                <div className={s.countOptions}>
                    {/*<p>Количество опций: <span>35</span></p>*/}
                    <p>
                        {generation ? <span
                            className={(equipment || equipment != null) || facelifting ? s.item_sep : ''}>{generation}</span> : ''}
                        {equipment ? <span className={facelifting ? s.item_sep : ''}>{equipment}</span> : ''}
                        {facelifting ? <span>{facelifting}</span> : ''}
                    </p>
                </div>
                <div className={s.features}>
                    <ul>
                        <li>
                            <div>
                                <p>{engine.length === 1 ? engine + '.0' : engine} л</p>
                                <p>{power} л.с</p>
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
                    <p><span>{price.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")}</span>
                        <span>{'BYN'} </span></p>
                    <div>
                        {
                            price2 && price !== price2 && regionPrice !== 'price-rus'
                                ? <p>
                                    <span>{price2 ? price2.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") : ''}</span>
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
                </div>
            </div>


        </div>
    );
};

export default RecommendedItem;