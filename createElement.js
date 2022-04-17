
module.exports = function createElement(element, attributes) {
    const $element = document.createElement(element);
    for (attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
            $element[attribute] = attributes[attribute];
        }
    }
    return $element;
}

// Alternative
// module.exports = function createElement(element, attributes) {
//     const $element = document.createElement(element);
//     Object.keys(attributes).forEach((attribute) => { $element[attribute] = attributes[attribute]; });
//     return $element;
// }