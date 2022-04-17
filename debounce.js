// Source: https://davidwalsh.name/javascript-debounce-function

module.exports = function debounce(fn, wait, immediate) {
    let timeout;

    return function(...args) {
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            !immediate && fn.apply(this, args);
        }, wait);
        callNow && fn.apply(this, args);
    };
}