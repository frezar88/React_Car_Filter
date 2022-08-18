import React, {useState} from 'react';
import s from './FullScreenSlider.module.scss'
import {Carousel} from "react-responsive-carousel";
import CarInfoStore from "../../../store/CarInfoStore";
import noPhoto from "../../../img/no-photo.png";
import CloseIcon from '@mui/icons-material/Close';

const FullScreenSlider = ({emulateTouch, infiniteLoop,setShowFullScreen}) => {
    const [imgError, setImgError] = useState(false)
    return (
        <div>
            <div className={s.block}>
                <div>
                    <button onClick={()=>setShowFullScreen(false)} type={'button'} className={s.btn_close}>
                        <CloseIcon style={{color:'#fff'}} fontSize={'large'}/>
                    </button>
                </div>
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
                            CarInfoStore.getCarInfo()['images']['img'].map((e, index) =>
                                <div className={s.slider__item}  key={index}>
                                    <img
                                        style={{
                                            transform: 'scale(1)',
                                            width: '100%',
                                            maxHeight: '800px',
                                            objectFit: 'contain'
                                        }}
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
                                style={{transform: 'scale(1)'}}
                                src={noPhoto} alt="#"
                            />
                    }
                </Carousel>
            </div>
        </div>

    );
};

export default FullScreenSlider;