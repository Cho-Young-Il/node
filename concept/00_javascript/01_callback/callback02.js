function calc(mode) {

    var funcs = {
        'plus' : function(left, right) {
            return left + right;
        },
        'minus' : function(left, right) {
            return left - right;
        }
    }

    return funcs[mode];
}

console.log( calc('plus')(2, 1) );
console.log( calc('minus')(2, 1) );
