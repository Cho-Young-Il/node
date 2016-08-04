var Foo = function (name) { this.name = name; };
Foo.prototype.data = [ 1, 2, 3 ];
Foo.prototype.showData = function () { console.log(this.name, this.data); };

var foo1 = new Foo('foo1');
var foo2 = new Foo('foo2');

foo1.showData();
foo2.showData();

foo1.data.push(4);

foo1.showData();
foo2.showData();
