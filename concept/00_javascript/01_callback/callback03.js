var process = [
    function(input) { return input + 10; },
    function(input) { return input * input; },
    function(input) { return input / 2; }
];

var input = 1;
for(var i = 0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input);
