import React, {useState} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarInfoStore from "../../../store/CarInfoStore";
import noPhoto from '../../../img/no-photo.png'

const MySlider = ({data = [1, 1, 1, 1, 1], infiniteLoop, emulateTouch}) => {
    const [imgError, setImgError] = useState(false)
    return (
        <div>
            <Carousel
                showStatus={false}
                autoPlay={true}
                dynamicHeight={true}
                stopOnHover={true}
                showThumbs={false}
                emulateTouch={emulateTouch}
                infiniteLoop={infiniteLoop}>
                {
                    CarInfoStore.getCarInfo()['image']
                        ?
                    CarInfoStore.getCarInfo()['image'].split().map((e,index) =>
                        <div key={index}>
                            <img
                                style={{transform:'scale(0.7)'}}
                                // src={`https://stock.aps.by${e}`}
                                // src={e}
                                src={imgError ? noPhoto : '/img/' + e} alt="#"
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