function largestOfFour(arr) {
    // Return an array consisting of the largest number from each provided sub-array.
    // For simplicity, the provided array will contain exactly 4 sub-arrays.
    var largest1 = 0;
    var largest2 = 0;
    var largest3 = 0;
    var largest4 = 0;
    var result = [];

    for (var i = 0; i < 4; i++) {
        var currentSet = arr[i];
        result.push(Math.max.apply(null, currentSet));
    }

    console.log(result);
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
