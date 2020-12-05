var greetings = require('./hello.json') 
var ari = require('array-random-item');

module.exports = { 
    greet: () => { 
        // greetings[Math.floor(Math.random()*greetings.length)]
        exports.random = ari(greetings);
        console.log(exports.random)
    } 
};

exports.all = greetings
exports.random = ari(greetings);
console.log(exports.random)
