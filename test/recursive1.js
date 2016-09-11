const factorial = (n) => {
    if(n == 0) { return 1; }
    else { return n * factorial(n - 1); }
};

console.log(factorial(3));

const fibonacci = (n) => {
    if(n == 1 || n == 2) { return 1; }
    else return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(7));

const test1 = (nCount) => {
    if(nCount <= 0) {
        console.log('발사');
    } else {
        console.log('카운트다운 : ', nCount);
        setTimeout(() => {
            test1( nCount - 1 );
        }, 1000);
    }
};

test1(5);


console.log(Number('-99'));
