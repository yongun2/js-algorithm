function isPalindrome(string) {
  function reverse(input) {
    if (input.length === 0) return "";
    return reverse(input.slice(1)) + input.slice(0, 1);
  }
  return string === reverse(string);
}

console.log(isPalindrome("amanaplanacanalpanama"));
