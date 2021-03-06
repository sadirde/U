// Source: http://ejohn.org/projects/flexible-javascript-events/

exports.add = function (obj, type, fn) {
    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function() { obj["e" + type + fn](window.event); };
        obj.attachEvent("on" + type, obj[type + fn]);
    } else {
        obj.addEventListener(type, fn, false);
    }
}

exports.remove = function (obj, type, fn) {
    if (obj.detachEvent) {
        obj.detachEvent("on" + type, obj[type + fn])
        obj[type + fn] = null;
    } else {
        obj.removeEventListener(type, fn, false);
    }
}