/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  // do your work here
for(var i = 1; i < n; i++){
  if(i % 3 === 0 || i % 5 === 0){
    sum += i;
  }
}
console.log(sum);
  return sum;
};

//input 10
//output multiples of 3 & 5
//3 + 5 + 6 + 9 = 23