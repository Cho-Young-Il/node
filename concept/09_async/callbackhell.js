function task1(callback) {
    console.log('Tast1 시작');

    setTimeout(function() {
        console.log('Task1 끝');
        callback();
    }, 300);
}

function task2(callback) {
    console.log('Task2 시작');
    callback();
    setTimeout(function() {
        console.log('Task2 끝');
    }, 200);
}

//task1();
//task2();
task1(function() {
    task2(function() {
        console.log(1);
    });
})