import s from './App.module.scss';
import ResultCarBlock from "./components/resultCarBlock/ResultCarBlock";
import SideBarBlock from "./components/sideBarBlock/SideBarBlock";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import ResultStore from "./store/resultStore";


const App = observer(() => {
    useEffect(() => {
        ResultStore.setStartedCars()

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
