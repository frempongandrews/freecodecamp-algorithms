function confirmEnding(str, end) {
    // Check if a string (first argument, str) ends with the given target
    // string (second argument, target).
    // This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
    // But for the purpose of this challenge, we would like you to use one of the JavaScript
    // substring methods instead

    // confirmEnding("He has to give me a new name", "name") should return true.
    // confirmEnding("Open sesame", "same") should return true.
    // confirmEnding("Open sesame", "pen") should return false.

    var endLength = end.length;
    var stringEnd = str.substr(str.length - endLength);

    if (stringEnd == end) {
        console.log(true);
    } else {
        console.log(false);
    }

}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
