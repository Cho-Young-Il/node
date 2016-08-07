exports.timer = new process.EventEmitter();

setInterval(() => {
    exports.timer.emit('tick');
}, 1000);
