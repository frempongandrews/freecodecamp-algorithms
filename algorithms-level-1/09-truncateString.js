function truncateString(str, num) {
    // Truncate a string (first argument) if it is longer than the given maximum
    // string length (second argument). Return the truncated string with a ... ending.

    //     Note that inserting the three dots to the end will add to the string length.

    // However, if the given maximum string length num is less than or equal to 3,
    // then the addition of the three dots does not add to the string length in
    // determining the truncated string.

    // truncateString("Absolutely Longer", 2) should return "Ab...".

    var stringLength = str.length;

    switch (true) {
        case (stringLength > num && num > 3):
            console.log(str.slice(0, num - 3) + "...");
            break;

        case (stringLength > num && num <= 3):
            console.log(str.slice(0, num) + "...");
            break;

        case (stringLength <= num):
            console.log(str);
            break;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
