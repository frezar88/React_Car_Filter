export const BRAND_NAME = 'Mitsubishi'
export const PRIME_COLOR = '#ed1c24'









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