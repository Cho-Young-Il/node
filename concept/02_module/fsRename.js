const fs = require('fs');
fs.rename('./writeTest2.txt', './demo.txt', (err) => {
    if(err) { throw err; }
    console.log('complet update');
});
