// Source: https://davidwalsh.name/get-absolute-url

module.exports = (function () {
    let a;

    return function (url) {
        if (!a) {  a = document.createElement("a"); }
        a.href = url;

        return a.href;
    };
})();