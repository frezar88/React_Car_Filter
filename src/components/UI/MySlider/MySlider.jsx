import React, {useState} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarInfoStore from "../../../store/CarInfoStore";
import noPhoto from '../../../img/no-photo.png'
import s from './MySlider.module.css'

const MySlider = ({data = [1, 1, 1, 1, 1], infiniteLoop, emulateTouch,setShowFullScreen}) => {
    const [imgError, setImgError] = useState(false)
    // console.log(CarInfoStore.getCarInfo()['images']['img'])
    return (
        <div>
            <Carousel
                showStatus={false}
                autoPlay={true}
                dynamicHeight={true}
                stopOnHover={true}
                showThumbs={false}
                emulateTouch={emulateTouch}
                infiniteLoop={infiniteLoop}
                interval={7000}
            >

                {
                    CarInfoStore.getCarInfo()['images']
                        ?
                        CarInfoStore.getCarInfo()['images']['img'].map((e,index) =>
                        <div className={s.slider__item} onClick={()=>setShowFullScreen(true)}  key={index}>
                            <img
                                style={{transform:'scale(1)',width:'100%',maxHeight:'700px',objectFit: 'contain'}}
                                src={imgError ? noPhoto : 'https://stock.aps.by/' + e.path} alt="#"
                                onError={(e) => {
                                    if (e.type === 'error') {
                                        setImgError(true)
                                    }
                                }}
                            />
                        </div>
                    )
                        : <img
                            style={{transform:'scale(1)'}}
                            src={noPhoto} alt="#"
                        />
                }

            </Carousel>
        </div>
    );
};

export default MySlider;