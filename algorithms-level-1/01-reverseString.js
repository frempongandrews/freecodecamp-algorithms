function reverseString(str) {
    //Reverse the provided string
    // reverseString("hello") should become "olleh".
    // reverseString("Howdy") should become "ydwoH"
    var reversed = str.split("").reverse().join("");
    console.log(reversed);
}

reverseString("hello");
