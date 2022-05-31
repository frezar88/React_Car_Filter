import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MySlider = ({data = [1, 1, 1, 1, 1], infiniteLoop, emulateTouch}) => {
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
                    data.map((e) =>
                        <div>
                            <img
                                src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
                                alt="aaa"/>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default MySlider;