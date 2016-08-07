/*
    이벤트 생성
    addListener(eventName, eventHandler)    이벤트 연결
    on(eventName, eventHandler)             이벤트 연결
    setMaxListener(limit)                   이벤트 연결 개수 조절
    removeListener(eventName, handler)      특정 이벤트의 이벤트 리스너 제거
    removeAllListener([eventName])          모든 이벤트 리스너 제거
    once(eventName, eventHandler)           이벤트를 한번만 연결
 */

//EventEmitter 객체 생성
var custom = new process.EventEmitter();

custom.on('tick', (code) => {
    console.log('tick 이벤트 실행');
});

custom.emit('tick');
