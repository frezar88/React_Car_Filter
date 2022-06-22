import s from '../App.module.scss';
import ResultCarBlock from "../components/resultCarBlock/ResultCarBlock";
import SideBarBlock from "../components/sideBarBlock/SideBarBlock";
import {useEffect} from "react";
import CarsStore from "../store/carsStore";
import ChangeFormStore from "../store/changeFormStore";
import ActualStoreFilters from "../store/actualStoreFilters";
import UiStore from "../store/uiStore";
import {observer} from "mobx-react-lite";


const FilterPage = observer(({...props}) => {
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
                if (!checked) {
                    ChangeFormStore.setAllChangeFilters(
                        {
                            ...ChangeFormStore.getAllChangeFilters(),
                            complectation: [],
                            model: [...ChangeFormStore.getChangeModel()].filter(item => item !== value)
                        }
                    )
                } else {
                    action('setChangeModel', 'getChangeModel', checked, value, 'model')
                }
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
            case 'complectation':
                action('setChangeComplectation', 'getChangeComplectation', checked, value)
                break
            default:
                break
        }

        ActualStoreFilters.takeActualCarList()

        UiStore.setArrayCountSlice(27)

    }
    return (
        <div className={s.App}>
            {/*<HeaderCarsBlock/>*/}
            <form onChange={changeForm}>
                <div className={[s.wrapper, UiStore.getPage() ==='filter'? s.show:s.hide].join(' ')}>
                    <SideBarBlock/>
                    <ResultCarBlock/>
                </div>
            </form>
        </div>
    );
});

export default FilterPage;
