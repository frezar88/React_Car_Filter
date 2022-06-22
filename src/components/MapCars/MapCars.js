import React, {useState} from 'react';
import s from './MapCars.module.scss'
import CarInfoStore from "../../store/CarInfoStore";

const MapCars = () => {
    const [location] = useState(CarInfoStore.getCarInfo()['location'])

    const dealer_frame = {
        'Минск, ул.Каменногорская 11': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.1279223003576!2d27.413836!3d53.9117027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdbf5fb45df0d%3A0xd87a15bc160fda41!2z0YPQuy4g0JrQsNC80LXQvdC90L7Qs9C-0YDRgdC60LDRjyAxMSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1654253033655!5m2!1sru!2sby",
        'Бобруйск, пр-т Георгиевский, 3': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.2990091494144!2d29.219203099999998!3d53.15867409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d731ff3136d1e3%3A0x79304356e78a3479!2z0L_RgNC-0YHQvy4g0JPQtdC-0YDQs9C40LXQstGB0LrQuNC5IDMsINCR0L7QsdGA0YPQudGB0Lo!5e0!3m2!1sru!2sby!4v1654257473184!5m2!1sru!2sby",
        'Брест, пр-т Партизанский, 34': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.279655854137!2d23.753978316105083!3d52.111040279738816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210ebef9d042f5%3A0xf1531a5b626f2a98!2z0J_QsNGA0YLQuNC30LDQvdGB0LrQuNC5INC_0YDQvtGB0L8uIDM0LCDQkdGA0LXRgdGC!5e0!3m2!1sru!2sby!4v1654257527595!5m2!1sru!2sby",
        'Витебск, ул.Гагарина, 169':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2275.4721707718772!2d30.25885891620064!3d55.22747438041609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c57682921345f7%3A0x1c7675ab564a2a92!2z0YPQu9C40YbQsCDQk9Cw0LPQsNGA0LjQvdCwIDE2OSwg0JLQuNGC0LXQsdGB0Lo!5e0!3m2!1sru!2sby!4v1654257562172!5m2!1sru!2sby",
        'г.Минск ул. Свислочская 9':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.597082866498!2d27.64573201615797!3d53.85002988008764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd20fb74b73cb%3A0x8caa4f9b5ff37ef3!2z0YPQuy4g0KHQstC40YHQu9C-0YfRgdC60LDRjyA5LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1654257594331!5m2!1sru!2sby",
        'Гомель, пр-т Космонавтов, 116':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.114338775438!2d30.95051461611557!3d52.45895667980264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d46bd6c20f7ef1%3A0xf3f123ed8264f2b3!2z0L_RgNC-0YHQvy4g0JrQvtGB0LzQvtC90LDQstGC0L7QsiAxMTYsINCT0L7QvNC10LvRjCAyNDYwMTA!5e0!3m2!1sru!2sby!4v1654257628512!5m2!1sru!2sby",
        'Гродно, ул.Белуша, 61':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.7171024181744!2d23.86438871615242!3d53.66984378004809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd64f300b356b%3A0xdbfd7d0de3681b4b!2z0YPQuy4g0JHQtdC70YPRiNCwIDYxLCDQk9GA0L7QtNC90L4!5e0!3m2!1sru!2sby!4v1654257669272!5m2!1sru!2sby",
        'Гродно, ул.Белуша, 61/2':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.7171024181744!2d23.86438871615242!3d53.66984378004809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd64f300b356b%3A0xdbfd7d0de3681b4b!2z0YPQuy4g0JHQtdC70YPRiNCwIDYxLCDQk9GA0L7QtNC90L4!5e0!3m2!1sru!2sby!4v1654257778759!5m2!1sru!2sby",
        'Минск, пр-т Дзержинского, 134':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.9585808218712!2d27.46375221615766!3d53.843600580086246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf3f1738d4f3%3A0x1fc850188728d622!2z0L_RgNC-0YHQv9C10LrRgiDQlNC30LXRgNC20LjQvdGB0LrQvtCz0L4gMTM0LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1654257817668!5m2!1sru!2sby",
        'Минск, ул.Машиностроителей 9':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.55135162615!2d27.64640801615792!3d53.85084318008794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd20fa7c591d9%3A0x4b44696e991c5d08!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LkgOSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1654257870225!5m2!1sru!2sby",
        'Минск, ул.Свислочская 9':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.5970828664977!2d27.645732016157957!3d53.85002988008765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd20fb74b73cb%3A0x8caa4f9b5ff37ef3!2z0YPQuy4g0KHQstC40YHQu9C-0YfRgdC60LDRjyA5LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1654257917598!5m2!1sru!2sby",
        'Могилёв, пр-т Шмидта, 1г/1':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.949407647494!2d30.309777216158658!3d53.87932738009421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0519a4f1161cd%3A0x42975d7703cb580c!2z0L_RgNC-0YHQvy4g0KjQvNC40LTRgtCwIDEsINCc0L7Qs9C40LvRkdCy!5e0!3m2!1sru!2sby!4v1654257954817!5m2!1sru!2sby",
        'Могилёв, ул.Симонова, 55г':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.809295569881!2d30.307230016158265!3d53.86403898009078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0517be4809b1b%3A0x5a1ca8f09e16bdb!2z0YPQuy4g0KHQuNC80L7QvdC-0LLQsCA1NSwg0JzQvtCz0LjQu9GR0LI!5e0!3m2!1sru!2sby!4v1654257989014!5m2!1sru!2sby",
        'Пинск, ул.Новосёлов 64':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.972892005935!2d26.080874800000004!3d52.1348146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4727a11617fc7831%3A0x744dfd1b3322fab2!2z0YPQuy4g0J3QvtCy0L7RgdC10LvQvtCyIDY0LCDQn9C40L3RgdC6!5e0!3m2!1sru!2sby!4v1654259330066!5m2!1sru!2sby",
        'Пинск, ул.Новосёлов 64г':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.9728931195436!2d26.07868611610567!3d52.13481457974307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4727a11617fc7831%3A0x744dfd1b3322fab2!2z0YPQuy4g0J3QvtCy0L7RgdC10LvQvtCyIDY0LCDQn9C40L3RgdC6!5e0!3m2!1sru!2sby!4v1654259362570!5m2!1sru!2sby",
        'Полоцк, ул.П.Бровки, 61':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.309722826348!2d28.74556111620843!3d55.47469938047993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c491c2180bf09f%3A0x9484dcc4d4d623d3!2z0YPQuy4g0J_QtdGC0YDRg9GB0Y8g0JHRgNC-0LLQutC4IDYxLCDQn9C-0LvQvtGG0Lo!5e0!3m2!1sru!2sby!4v1654259391892!5m2!1sru!2sby",
        'Полоцк, ул.П.Бровки, 61a':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.309722826348!2d28.74556111620843!3d55.47469938047993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c491c2180bf09f%3A0x9484dcc4d4d623d3!2z0YPQuy4g0J_QtdGC0YDRg9GB0Y8g0JHRgNC-0LLQutC4IDYxLCDQn9C-0LvQvtGG0Lo!5e0!3m2!1sru!2sby!4v1654259423600!5m2!1sru!2sby",
        'Солигорск, ул.Железнодорожная 9':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.536214478541!2d27.54604261612563!3d52.79467067986713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d830443780983b%3A0x5cfcf05296e37274!2z0YPQuy4g0JbQtdC70LXQt9C90L7QtNC-0YDQvtC20L3QsNGPIDksINCh0L7Qu9C40LPQvtGA0YHQuiAyMjM3MTA!5e0!3m2!1sru!2sby!4v1654259454584!5m2!1sru!2sby",
        'Солигорск, ул.Кольцевая, 6':"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.651109671115!2d27.516734316125614!3d52.792599079866775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8308ab6980a67%3A0x2851228eb525ca4d!2z0YPQuy4g0JrQvtC70YzRhtC10LLQsNGPIDYsINCh0L7Qu9C40LPQvtGA0YHQug!5e0!3m2!1sru!2sby!4v1654259487538!5m2!1sru!2sby"

    }
    return (
        <div className={s.block_map}>
            <div className={s.info}>
                <h3>Город: {location.split(',')[0]}</h3>
                <h4>Краткое описание </h4>
                <ul>
                    <li> {location.split(',')[1]}</li>
                    <li>
                        <a href="https://stock.aps.by">Наш сайт</a>
                    </li>
                </ul>
            </div>
            <div className={s.work_time}>
                <h4>График работы</h4>
                <ul>
                    <li>пн: c 08-00 до 20-00</li>
                    <li>вт: c 08-00 до 20-00</li>
                    <li>ср: c 08-00 до 20-00</li>
                    <li>чт: c 08-00 до 20-00</li>
                    <li>пт: c 08-00 до 20-00</li>
                    <li>сб: c 08-00 до 20-00</li>
                    <li>вск: выходной</li>
                </ul>
            </div>
            <div className={s.map}>
                <iframe
                    title={'test'}

                    src={dealer_frame[location]}
                />
            </div>


        </div>
    );
};

export default MapCars;