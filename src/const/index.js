import s from "../components/sideBarBlock/SideBarBlock.module.scss";


export const BRAND_NAME = 'Mitsubishi'
// mitsu
export const PRIME_COLOR = '#ed1c24'
//-----lada
// export const PRIME_COLOR = '#e37639'

//-----renault
// export const PRIME_COLOR = '#ffcc33'







export const debounce = (fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments);
        };

        clearTimeout(timeout);

        timeout = setTimeout(fnCall, ms);
    };
};


export const giveClassNameActiveOrDisabled = (el, data, checkbox) => {
    if (!checkbox) {
        if (data.length) {
            if (data.includes(el)) {
                return ''
            } else {
                return s.disabled
            }
        }
        return ''
    }
    if (data.length) {
        if (data.includes(el)) {
            return false
        } else {
            return true
        }
    }
    return false
}


export const CheckUrlAndClickInput = () =>{
    const url = new URL(window.location.href);
    const brand = url.searchParams.get("brand");
    const model =  url.searchParams.get("model");
    const promo =  url.searchParams.get("promo");
    const body =  url.searchParams.get("body");
    const fuelType =  url.searchParams.get("fuel");
    const transmissionType =  url.searchParams.get("transmission");
    const driveTypeId =  url.searchParams.get("drive");
    const color =  url.searchParams.get("color");
    const location =  url.searchParams.get("location");

    let blockInput = document.querySelector(`input[name="${brand}"]`)
    let modelInput = document.querySelector(`input[name="${model}"]`)
    let promoInput = document.querySelector(`input[name="${promo}"]`)
    let bodyInput = document.querySelector(`input[name="${body}"]`)
    let fuelTypeInput = document.querySelector(`input[name="${fuelType}"]`)
    let transmissionTypeInput = document.querySelector(`input[name="${transmissionType}"]`)
    let driveTypeInput = document.querySelector(`input[name="${driveTypeId}"]`)
    let colorInput = document.querySelector(`input[name="${color}"]`)
    let locationInput = document.querySelector(`input[name="${location}"]`)

    ClickInput(blockInput)
    ClickInput(modelInput)
    ClickInput(promoInput)
    ClickInput(bodyInput)
    ClickInput(fuelTypeInput)
    ClickInput(transmissionTypeInput)
    ClickInput(driveTypeInput)
    ClickInput(colorInput)
    ClickInput(locationInput)
    function ClickInput(block){
        if (block) {
            if (!block.checked) {
                block.click()
            }
        }
    }

}