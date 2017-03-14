function findLongestWord(str) {
    //Return the length of the longest word in the provided sentence.
    //Your response should be a number.
    // findLongestWord("May the force be with you") should return 5.
    // findLongestWord("Google do a barrel roll") should return 6.
    var wordsArr = str.split(" ");
    console.log(wordsArr);
    var maxLength = 0;
    var len = wordsArr.length;
    for (var i = 0; i < len; i++) {
        //taking care of ?,! or any other symbols
        currentWord = wordsArr[i].replace(/[^a-z]/gi, "");
        var currentWordLength = currentWord.length;
        if (currentWordLength > maxLength) {
            maxLength = currentWordLength;
        }
    }

    console.log(maxLength);
}

findLongestWord("I am swimming!");
