// Polyfill for Element.matches https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// Source: https://davidwalsh.name/element-matches-selector

function matches($element, selector) {
    const p = Element.prototype;
    const matches = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.mozMatchesSelector || function (selector) {
        return [].indexOf.call(document.querySelectorAll(selector), this) === -1;
    };
    return matches.call($element, selector);
}