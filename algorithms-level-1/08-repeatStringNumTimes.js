function repeatStringNumTimes(str, n) {
    // Repeat a given string (first argument) num times (second argument).
    // Return an empty string if num is not a positive number.

    // repeatStringNumTimes("*", 3) should return "***".
    // repeatStringNumTimes("abc", 3) should return "abcabcabc".
    // repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
    // repeatStringNumTimes("abc", 1) should return "abc"

    if (n <= 0) {
        console.log("");
    }


    if (n > 0) {
        var word = "";
        for (var i = 1; i <= n; i++) {
            word += str;
        }
        console.log(word);
    }
}

repeatStringNumTimes("abc", 2);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 1);
