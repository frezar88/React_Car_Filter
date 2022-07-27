import React, {useState} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarInfoStore from "../../../store/CarInfoStore";
import noPhoto from '../../../img/no-photo.png'

const MySlider = ({data = [1, 1, 1, 1, 1], infiniteLoop, emulateTouch}) => {
    const [imgError, setImgError] = useState(false)
    console.log(CarInfoStore.getCarInfo()['images']['img'])
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
                    CarInfoStore.getCarInfo()['images']
                        ?
                        CarInfoStore.getCarInfo()['images']['img'].map((e,index) =>
                        <div key={index}>
                            <img
                                style={{transform:'scale(0.7)'}}
                                // src={`https://stock.aps.by${e}`}
                                // src={e}
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