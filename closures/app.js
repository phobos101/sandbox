// Practising Closures and Callbacks.

// The closure can reference variables within the scope itself was created in.
// The closure can also be sent to another function as an argument becuase in
// JS, all functions are first-class.

function sayHello(func) {
  console.log(func());
};

(function start() {
  var name = "Rob";

  var closure = function() {
    return 'Hello ' + name;
  };
  sayHello(closure);

})();
