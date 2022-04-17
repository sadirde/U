module.exports = function appendChildren(parent, children) {
    parent = typeof parent === "string" ? document.createElement(parent) : parent;
    children.forEach((child) => { parent.appendChild(child); });
    return parent;
}