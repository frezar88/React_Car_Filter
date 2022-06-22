import React from 'react';
import FilterPage from "./page/filterPage";
import {observer} from "mobx-react-lite";
import CarPage from "./page/carPage";
import UiStore from "./store/uiStore";
import s from './App.module.scss'

const App = observer(() => {
    return (
        < div className={s.AppGlobal}>
            {
                UiStore.getPage() === 'car_card'
                    ? <CarPage/>
                    : ''
            }

            <FilterPage/>

        </div>
    );
});

export default App;