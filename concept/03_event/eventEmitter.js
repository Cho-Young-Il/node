/*
    이벤트를 연결할 수 있는 모든 객체는
    EventEmitter 객체를 상속받는다

    사용자도 이벤트를 직접 정의 할 수 있는데 EventEmitter를 이용한다

    -이벤트 설정
    emitter 객체.on('이벤트명', callback);

    -이벤트 발생시키기
    emit('이벤트명');
 */

var EventEmitter = require('events').EventEmitter;

//이벤트를 사용자가 쉽게 상속하기 위해서 util 모듈을 사용
var util = require('util');
var Car = function() {};

//car에 이벤트를 사용하기 위해 EventEmitter 객체를 상속처리
util.inherits(Car, EventEmitter);
Car.prototype.accelerate = function() {
    this.emit('accel', 'brr brr');
};
Car.prototype.stop = function() {
    this.emit('stop');
};
Car.prototype.speedUp = function() {
    this.emit('speed', 10);
};

var myCar = new Car();
//이벤트 설정
myCar.on('accel', (args1) => {
    console.log('accel 이벤트 발생 : ' + args1);
}).on('stop', () => {
    console.log('stop 이벤트 발생 : 차를 중지시킴');
}).on('speed', (speed) => {
    console.log('자동차의 속도를 %d 만큼 올렷습니다.', speed);
});

myCar.emit('accel', 'BBANG!');
myCar.stop();
