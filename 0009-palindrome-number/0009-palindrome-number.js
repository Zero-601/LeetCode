/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      let totext = x.toString();
  let reverse = "";
  for (let index = totext.length - 1; index >= 0; index--) {
    reverse += totext[index];
  }
  if (reverse == totext) {
    return true;
  }
  return false;
};