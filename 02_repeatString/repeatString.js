const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }

  return result;
};

console.log(repeatString("hi", 3));

/*In the context of the repeatString function, you don’t need to explicitly handle the case where num is 0 because the behavior of the loop will naturally result in an empty string.

Here's why:

When num is 0, the loop condition (i < num) evaluates to false immediately, so the loop body is never executed.
As a result, the result variable, which is initialized as an empty string (''), remains unchanged and is returned as an empty string.*/


// Do not edit below this line
module.exports = repeatString;
