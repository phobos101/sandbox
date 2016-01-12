// Emitter is a function constructor.
function Emitter() {
    this.events = {}
};

// We create a couple of prototypes for all objects created with Emitter.

// the 'on' prototype method takes 2 args, name is looking for a match of any
// name in the events object, or it will create a new empty array. 
// The listener is a function that is pushed into the array E.g:
// this.events = {
//     name: [listener, listener];
// };
Emitter.prototype.on = function(name, listener) {
    this.events[name] = this.events[name] || [];  // Use existing, or create new array.
    this.events[name].push(listener); // Push the function as an element onto the array.
};

Emitter.prototype.emit = function(name) {
    if (this.events[name]) { // As long as the name exists in this.events...
        this.events[name].forEach(function(listener) { // ...then loop over each element of the array, calling each element 'listener'...
            listener(); // ... and execute the function.
        });
    };
};

module.exports = Emitter; // Export the Emitter.
