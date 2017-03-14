function titleCase(str) {
    //   Return the provided string with the first letter of each word capitalized.
    //   Make sure the rest of the word is in lower case.
    // For the purpose of this exercise, you should also capitalize connecting
    //words like "the" and "of".
    //titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
    // titleCase("sHoRt AnD sToUt") should return "Short And Stout".
    // titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

    var lowerCasedStr = str.toLowerCase();
    var lowerCasedArr = lowerCasedStr.split(" ");
    var len = lowerCasedArr.length;
    for (var i = 0; i < len; i++) {
        var currentWord = lowerCasedArr[i];
        var formattedWord = currentWord[0].toUpperCase() + currentWord.slice(1);
        lowerCasedArr.splice(i, 1, formattedWord);
    }


    console.log(lowerCasedArr.join(" "));
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
