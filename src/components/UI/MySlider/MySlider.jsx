import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarInfoStore from "../../../store/CarInfoStore";

const MySlider = ({data = [1, 1, 1, 1, 1], infiniteLoop, emulateTouch}) => {
    console.log(CarInfoStore.getCarInfo()['image'].split())
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
                    CarInfoStore.getCarInfo()['image'].split().map((e,index) =>
                        <div key={index}>
                            <img
                                style={{transform:'scale(0.7)'}}
                                // src={`https://stock.aps.by${e}`}
                                src={e}
                                alt="car"/>
                        </div>
                    )
                }

            </Carousel>
        </div>
    );
};

export default MySlider;