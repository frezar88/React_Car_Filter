import s from './App.module.scss';
import ResultCarBlock from "./components/resultCarBlock/ResultCarBlock";
import SideBarBlock from "./components/sideBarBlock/SideBarBlock";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import CarsStore from "./store/carsStore";
import ChangeFormStore from "./store/changeFormStore";


const App = observer(() => {
    useEffect(() => {
        CarsStore.setStartedCars()
    }, [])

    const action = (setter, getter, checked, value) => {
        if (checked) {
            ChangeFormStore[setter]([...ChangeFormStore[getter](), value])
        } else {
            ChangeFormStore[setter]([...ChangeFormStore[getter]()].filter(item => item !== value))
        }
    }
    const changeForm = (e) => {
        let type = e.target.attributes['data-name'].value
        let value = e.target.attributes['name'].value
        let checked = e.target.checked
        switch (type) {
            case 'promo':
                action('setChangePromo', 'getChangePromo', checked, value)
                break
            case 'brand':
                action('setChangeBrand', 'getChangeBrand', checked, value)
                break
            case 'model':
                action('setChangeModel', 'getChangeModel', checked, value)
                break
            case 'year':
                action('setChangeYear', 'getChangeYear', checked, value)
                break
            case 'transmission_type':
                action('setChangeTransmission', 'getChangeTransmission', checked, value)
                break
            case 'drive_type_id':
                action('setChangeDrive', 'getChangeDrive', checked, value)
                break
            case 'body':
                action('setChangeBody', 'getChangeBody', checked, value)
                break
            case 'location':
                action('setChangeLocation', 'getChangeLocation', checked, value)
                break
            case 'color':
                action('setChangeColor', 'getChangeColor', checked, value)
                break
            default:
                break
        }
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
