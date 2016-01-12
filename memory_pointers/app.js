// Snippet to show passing variables by value and by reference

// A primitive datatype (number, string etc) will pass by value,
// ergo they are stored in different addresses in memory.
// An object is passed by reference and points to the same address.

// Passing by value
function change(b) {
    b = 2;
};

var a = 1;
change(a);
console.log(a);
// This will print 1, because a is a primitive, thus b is a copy and
// does not override a.

// Passing by reference
function changeObject(d) {
    d.color = 'black';    
};

var c = {
    color: 'red'
};
changeObject(c);
console.log(c)
// This will show that the color property is now black, beause d
// is referencing, or pointing to the memory location of c, and overrides it.