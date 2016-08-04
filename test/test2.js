//프로토타입은 인스턴스 개념이 아님.?
var FOO = function(name) {this.name = name;};
FOO.prototype.data = [1, 2, 3];
FOO.prototype.showData = function() { console.log(this.name, this.data); };

var foo1 = new FOO('foo1');
var foo2 = new FOO('foo2');

foo1.showData();
foo2.showData();

foo1.data.push(4);

foo1.showData();
foo2.showData();

console.log('///////////////////////////////////////////////////////////////////////////////////');

function Foo(name) {
    this.name = name;
    this.data = [1, 2, 3]; // setting a non-primitive property
};
Foo.prototype.showData = function () { console.log(this.name, this.data); };
var foo1 = new Foo("foo1");
var foo2 = new Foo("foo2");
foo1.data.push(4);
foo1.showData(); // "foo1", [1, 2, 3, 4]
foo2.showData(); // "foo2", [1, 2, 3]

console.log('///////////////////////////////////////////////////////////////////////////////////');

function Animal(name) {
    this.name = name;
};
Animal.prototype.move = function(meters) {
    console.log(this.name + " moved " + meters + "m. ");
}

function Snake() {
    Animal.apply(this, Array.prototype.slice.call(arguments));
};

Snake.prototype = new Animal();
Snake.prototype.move = function() {
    console.log('Slithering...');
    Animal.prototype.move.call(this, 5);
};

var sam = new Snake("Sammy the Python");
sam.move();