// Reducing an array directly
console.log('\nReducing [1,2,3,4]\n');
var n = 1;
var sum = [1,2,3,4].reduce(function(previous, current) {

  // For info only
  console.log('Iteration [' + n + '] - ' + previous + ' + ' + current + ' = ' + (previous + current));
  n++;
  // End for info only

  return previous + current;

});

console.log('\nSum is: ' + sum)
