import React from 'react';
import FilterStore from "../../../../store/filterStore";
import {observer} from "mobx-react-lite";
import ResultStore from "../../../../store/resultStore";
import {debounce} from "../../../../const";

const MobileContentMenu = observer(() => {

    const changeForm = () => {
        FilterStore.getStartedFilters()
        ResultStore.getStartedCars()
    }
    let debounceOnChangeForm = debounce(changeForm, 500);
    return (
        <div>
            <form onChange={debounceOnChangeForm}></form>
        </div>
    );
});

export default MobileContentMenu;