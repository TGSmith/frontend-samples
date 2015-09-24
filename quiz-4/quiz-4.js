// #4 Write a function that determines whether or not a sentence is a pangram (it contains every letter of the alphabet at least once).
// Write some test code that outputs the results (true or false) of the following sentences to the browser console (i.e. console.log):

  function is_pangram(str) {
   var s = str.toLowerCase();
   var alphabet = "abcdefghijklmnopqrstuvwxyz";

   for (var i = 0; i < 26; i++)
       if (s.indexOf(alphabet.charAt(i)) == -1)
           return false;
   return true;
} 

console.log(is_pangram("is this a pangram"));  // false
console.log(is_pangram("The quick brown fox jumps over the lazy dog"));  // true

