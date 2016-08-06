//const fs = require('fs');
//const arr = [ 1, 2, 3, 4, 5 ];
//
//var text = '';
//var loopIndex = 0;
//
//for(var item in arr) {
//    fs.readFile('./demo.txt', 'utf8', (err, data) => {
//        if(err) { throw err; }
//        text += data;
//        loopIndex++;
//        if(loopIndex == arr.length) {
//            console.log(text);
//        }
//    });
//}

const fs = require('fs');
const arr = [ 1, 2, 3, 4, 5 ];

var text = '';

var repeater = (i) => {
    if(i < arr.length) {
        fs.readFile('./demo.txt', 'utf8', (err, data) => {
            text += data;
            repeater(i + 1);
        });
    } else {
        console.log(text);
    }
}

repeater(0);