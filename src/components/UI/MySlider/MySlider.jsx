import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarInfoStore from "../../../store/CarInfoStore";
import s from './MySlider.module.scss'

const MySlider = ({data = [1, 1, 1, 1, 1], infiniteLoop, emulateTouch}) => {




    return (
        <div>
            <Carousel className={s.slider}
                showStatus={false}
                autoPlay={true}
                dynamicHeight={true}
                stopOnHover={true}
                showThumbs={false}
                emulateTouch={emulateTouch}
                infiniteLoop={infiniteLoop}

                // renderIndicator={(onClickHandler, isSelected, index, label) => {

                //         const style = isSelected
                //             ? { ...defStyle, color: "red" }
                //             : { ...defStyle };
                //     return (<li style={style}></li>)
                // }}

                //     return (
                //         <li


                //         >
                //         </li>
                //     );

            >

                {
                    CarInfoStore.getCarInfo()['image'].split().map((e,index) =>
                        <div key={index}>
                            <img
                                style={{transform:'scale(0.7)'}}
                                src={`https://stock.aps.by${e}`}
                                // src={e}
                                alt="car"/>
                        </div>
                    )
                }
                <div >
                    <img
                        style={{transform:'scale(0.7)'}}
                        src={`https://stock.aps.by/images/nissan/000002017/z52_g41_2.png`}
                        // src={e}
                        alt="car"/>
                </div>
            </Carousel>
        </div>
    );
};

export default MySlider;