// Source: https://davidwalsh.name/add-rules-stylesheets

const sheet = (function () {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode("")); // Webkit hack
    document.head.appendChild(style);
    return style.sheet;
})();