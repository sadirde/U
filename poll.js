// Source: https://davidwalsh.name/javascript-polling

module.exports = function poll(fn, timeout, interval) {
    const endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    const checkCondition = function (resolve, reject) {
        const result = fn();
        
        if (result) {
            resolve(result);
        } else if (Number(new Date()) < endTime) {
            setInterval(checkCondition, interval, resolve, reject);
        } else {
            reject(new Error(`Timed out for ${fn}: ${arguments}`));
        }
    };

    return new Promise(checkCondition);
}