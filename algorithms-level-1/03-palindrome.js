function palindrome(str) {
    //A palindrome is a word or sentence that's spelled the same way both forward
    //and backward, ignoring punctuation, case, and spacing.
    //Return true if the given string is a palindrome. Otherwise, return false.
    //i.e "racecar", "RaceCar", and "race CAR"
    var formattedStr = str.replace(/ /g, "").toLowerCase();
    // console.log(formattedStr);
    if (formattedStr.split("").reverse().join("") == formattedStr) {
        console.log(true);
    } else {
        console.log(false);
    }

}

palindrome("RaceCar");
