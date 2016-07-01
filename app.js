
var fizzBuzz = function() {
  for (var i = 1; i <= 100; i++) {
    var Result;
     if ((i%3===0) && (i%5===0)){
      Result = "FizzBuzz";
    }
   else if (i % 5 === 0) {
      Result = "Buzz";
    } 
    else if (i % 3 === 0) {
      Result = "Fizz";
    }

    else {
      Result = i;
    }
      console.log(Result);
  }
};
fizzBuzz();
