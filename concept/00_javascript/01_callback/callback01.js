function calc(func, num) {
    return func(num);
}

function increase(num) {
    return num + 1;
}

function decrease(num) {
    return num - 1;
}

console.log( (calc(increase, 1)) );
console.log( (calc(decrease, 1)) );
