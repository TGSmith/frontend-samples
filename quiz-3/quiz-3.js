// #3 Write a function that accepts a string sentence as a parameter, and returns a string with the words sorted by length. You can count punctuation symbols as "letters" in the word.

function sortWords(sentence) {
    var words = sentence.split(" ");
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < words.length - 1; i++) {
            if (words[i].length > words[i + 1].length) {
                var temp = words[i];
                words[i] = words[i + 1];
                words[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return words
}

console.log(sortWords("The quick brown fox jumped over the lazy dog"));
console.log(sortWords("A wizard's job is to vex chumps quickly in fog"));
console.log(sortWords("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
