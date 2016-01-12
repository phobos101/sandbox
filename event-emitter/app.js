var Emitter = require('./emitter');

var emitter = new Emitter(); // Create a new Emitter instance.

// We create two functions that are stored elements in the emitter.events.hello array. 
emitter.on('hello', function() {
    console.log('We recieved a greeting, sending reply...');
});

emitter.on('hello', function() {
    console.log('Hello back at you!');
});

console.log('Hello emitter');
emitter.emit('hello'); // We then call the emit method, and loop over each function in the emitter.events.hello array.