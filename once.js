// Source: https://davidwalsh.name/javascript-once

module.exports = function once(fn, context) {
    let result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
};