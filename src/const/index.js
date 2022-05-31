import s from "../components/sideBarBlock/SideBarBlock.module.scss";


export const BRAND_NAME = 'Mitsubishi'
// mitsu
// export const PRIME_COLOR = '#ed1c24'
//-----lada
// export const PRIME_COLOR = '#e37639'

//-----renault
export const PRIME_COLOR = '#ffcc33'







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

    let blockInput = document.querySelector(`input[name="${brand}"]`)
    let modelInput = document.querySelector(`input[name="${model}"]`)
    ClickInput(blockInput)
    ClickInput(modelInput)
    function ClickInput(block){
        if (block) {
            if (!block.checked) {
                block.click()
            }
        }
    }

}