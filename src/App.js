import s from './App.module.scss';
import ResultCarBlock from "./components/resultCarBlock/ResultCarBlock";
import SideBarBlock from "./components/sideBarBlock/SideBarBlock";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import CarsStore from "./store/carsStore";


const App = observer(() => {
    useEffect(() => {
        CarsStore.setStartedCars()
    }, [])
    const changeForm = (e) => {
        console.log(e.target)
    }
    return (
        <div className={s.App}>
            {/*<HeaderCarsBlock/>*/}
            <form onChange={changeForm}>
                <div className={s.wrapper}>
                    <SideBarBlock/>
                    <ResultCarBlock/>
                </div>
            </form>
        </div>
    );
});

export default App;
