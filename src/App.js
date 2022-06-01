import React from 'react';
import s from './App.module.scss'
import TopBlock from "./components/TopBlock/TopBlock";
import CarInfoBlock from "./components/CarInfoBlock/CarInfoBlock";

const App = () => {
    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <TopBlock/>
                <CarInfoBlock/>
                <div style={{height:500}}></div>
            </div>
        </div>
    );
};

export default App;