import React, {useState} from 'react';
import s from './UserPrice.module.scss'
import x from '../CarCard/CarCard.module.scss'
import MyButton from "../../UI/MyButton/MyButton";

const UserPrice = ({car_price}) => {
    const [userPriceName,setUserPriceName]=useState('')
    const [userPricePhone,setUserPricePhone]=useState('')
    const [userPrice,setUserPrice]=useState('')
    const [validName,setValidName]=useState(false)
    const [validPhone,setValidPhone]=useState(false)

    const changeName=(e)=>{
        setUserPriceName(e.target.value)
        if (e.target.value.length < 2){
            setValidName(false)
        }else{
            setValidName(true)
        }
    }
    const changePhone=(e)=>{
        setUserPricePhone(e.target.value)
        if (e.target.value.length <11){
            setValidPhone(false)
        }else{
            setValidPhone(true)
        }
    }

    return (
        <div className={s.userPrice}>
            <div className={s.userPrice__wrapper}>
                <div className={s.div_cont}>
                    <label htmlFor="name_user_price">ФИО</label>
                    <input
                        value={userPriceName}
                        onInput={changeName}
                        style={{borderBottom:userPriceName?userPriceName.length <2 ?'solid 1px red':'solid 1px green':"unset"}}
                        type="text"
                        placeholder={'Иван'}
                        id={'name_user_price'}
                    />
                </div>
                <div className={s.div_cont}>
                    <label htmlFor="phone_user_price">Телефон</label>
                   <input
                       onInput={changePhone}
                            style={{borderBottom:userPricePhone ? userPricePhone.length < 11?'solid 1px red':'solid 1px green':'unset'}}
                            id={'phone_user_price'}
                            placeholder={'+375 22 222 22 22'}
                        />

                </div>
                <div className={s.div_cont}>
                    <label htmlFor="user_price">Своя цена в BYN</label>
                    <input
                        value={userPrice}
                        onInput={(e)=>setUserPrice(e.target.value)}
                        type="number"
                        placeholder={car_price}
                        id={'user_price'}
                    />

                </div>
                <div className={x.button} style={{marginBottom: 0, marginTop: '10px'}}>
                    {/* eslint-disable-next-line no-mixed-operators */}
                    <MyButton  className={validName && validPhone ? '':s.disabled}   data-stop={'stop'}>Предложить</MyButton>
                </div>

            </div>

        </div>
    );
};

export default UserPrice;