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
                <div >
                    <img
                        style={{transform:'scale(0.7)'}}
                        src={`https://alogvinov.com/wp-content/uploads/2017/06/project-cars-2-screen-02-ps4-eu-26jan17.jpg`}
                        alt="car"/>
                </div>
            </Carousel>
        </div>
    );
};

export default MySlider;