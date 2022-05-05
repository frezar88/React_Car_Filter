import s from './App.module.scss';
import ResultCarBlock from "./components/resultCarBlock/ResultCarBlock";
import SideBarBlock from "./components/sideBarBlock/SideBarBlock";
import {useEffect, useMemo} from "react";

import FilterStore from './store/filterStore'
import {observer} from "mobx-react-lite";
import ResultStore from "./store/resultStore";


const App = observer(() => {
    useEffect(() => {
        FilterStore.getStartedFilters()
        ResultStore.getStartedCars()
    }, [])
    return (
        <div className={s.App}>
            {/*<HeaderCarsBlock/>*/}
            <div className={s.wrapper}>
                <SideBarBlock/>
                <ResultCarBlock/>
            </div>

        </div>
    );
});

export default App;
